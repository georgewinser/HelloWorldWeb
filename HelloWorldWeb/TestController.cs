using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HelloWorldWeb
{
  [Route("api/[controller]")]
  public class TestController : Controller
  {
    // GET: api/values
    [HttpGet]
    public IEnumerable<KeyValuePair<string, int>> Get()
    {
      List<KeyValuePair<string, int>> dic = new List<KeyValuePair<string, int>>();
     
      dic.Add(new KeyValuePair<string,int>("TEST", 1));
      dic.Add(new KeyValuePair<string, int>("TEST", 3));
      dic.Add(new KeyValuePair<string, int>("TEST", 2));
      dic.Add(new KeyValuePair<string, int>("TEST", 4));

      return dic;

    }

  }
}
