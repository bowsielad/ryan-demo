var builder = WebApplication.CreateBuilder(args);

// Register HttpClient
builder.Services.AddHttpClient();
builder.Services.AddLogging();

var reactAppBaseUrl = builder.Configuration["ReactAppBaseUrl"];

Console.WriteLine($"Environment: {builder.Environment.EnvironmentName}");
Console.WriteLine($"ReactAppBaseUrl: {reactAppBaseUrl}");

builder.Services.Configure<LoggerFilterOptions>(options =>
{
    // Adjust logging level depending on environment
    options.MinLevel = builder.Environment.IsDevelopment() ? LogLevel.Debug : LogLevel.Information;
});

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy", builder =>
    {
        builder
            .WithOrigins(
                "http://localhost:5173", // local dev (Vite)
                "http://host.docker.internal:5173", // docker
                "https://ryan-demo-thvs.onrender.com" // deployed frontend
            )
            .WithMethods("GET", "POST", "DELETE", "HEAD", "OPTIONS")
            .WithHeaders("Origin", "Accept", "Access", "Content-Type", "Authorization", "X-Requested-With")
            .WithExposedHeaders("Content-Type");
    });
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();

app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

// Use dynamic port binding
app.Run($"http://0.0.0.0:{Environment.GetEnvironmentVariable("PORT") ?? "8080"}");

