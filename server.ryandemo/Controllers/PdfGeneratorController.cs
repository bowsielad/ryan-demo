using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PuppeteerSharp;
using PuppeteerSharp.Media;

[Route("api/[controller]")]
[ApiController]
public class PdfGeneratorController : ControllerBase
{
    private readonly IConfiguration _config;

    public PdfGeneratorController(IConfiguration config)
    {
        _config = config;
    }

    [HttpGet("generate-report")]
    public async Task<IActionResult> GenerateReport(string pageUrl)
    {
        if (string.IsNullOrEmpty(pageUrl))
        {
            return BadRequest("Page URL is required.");
        }

        var chromePath = Environment.GetEnvironmentVariable("PUPPETEER_EXECUTABLE_PATH");

        var launchOptions = new LaunchOptions
        {
            Headless = true,
            ExecutablePath = chromePath ?? "/usr/bin/google-chrome-stable", // fallback
            Args = new[]
            {
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--disable-setuid-sandbox",
                "--no-sandbox"
            }
        };

        using var browser = await Puppeteer.LaunchAsync(launchOptions);
        using var page = await browser.NewPageAsync();

        string frontendBaseUrl = _config["ReactAppBaseUrl"] ?? "http://localhost:5173";
        string reactPageUrl = $"{frontendBaseUrl}/{pageUrl}";

        await page.GoToAsync(reactPageUrl);
        await page.WaitForTimeoutAsync(2000); // let the page render fully

        var pdfStream = await page.PdfDataAsync(new PdfOptions
        {
            Format = PaperFormat.A4,
            PrintBackground = true,
            PreferCSSPageSize = true
        });

        return File(pdfStream, "application/pdf", "AssessmentPageReport.pdf");
    }
}
