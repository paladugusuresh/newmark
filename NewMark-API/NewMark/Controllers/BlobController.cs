using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewMark.Models;
using Newtonsoft.Json;

namespace NewMark.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlobController : ControllerBase
    {
        private readonly string blobUrl;
        private readonly string sasToken;
        public BlobController(IConfiguration configuration)
        {
            blobUrl = configuration["BlobStorage:BlobUrl"];
            sasToken = configuration["BlobStorage:SasToken"];
        }

        [HttpGet]
        public async Task<IActionResult> GetProperties()
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    var response = await client.GetStringAsync(blobUrl + sasToken);
                    var properties = JsonConvert.DeserializeObject<List<Property>>(response);
                    return Ok(properties);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
