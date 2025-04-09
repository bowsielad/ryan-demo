var builder = WebApplication.CreateBuilder(args);

// Register HttpClient
builder.Services.AddHttpClient();
builder.Services.AddLogging();

var reactAppBaseUrl = builder.Configuration["ReactAppBaseUrl"];

Console.WriteLine($"Environment: {builder.Environment.EnvironmentName}");
Console.WriteLine($"ReactAppBaseUrl: {builder.Configuration["ReactAppBaseUrl"]}");


builder.Services.Configure<LoggerFilterOptions>(options =>
{
    options.MinLevel = LogLevel.Debug;
});


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
//app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run("http://0.0.0.0:8080");
