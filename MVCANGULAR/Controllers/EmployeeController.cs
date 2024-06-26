using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MVCANGULAR.Models;

namespace MVCANGULAR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DataService _dataService;
        public EmployeeController(DataService dataService) { 
            _dataService = dataService;
        }
        [HttpGet] 
        public async Task<IActionResult> Get()
        {
            List<Employee> employees =await _dataService.GetEmployees();
            return Ok(employees);
        }
    }
}
