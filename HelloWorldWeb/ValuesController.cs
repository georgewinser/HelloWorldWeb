using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HelloWorldWeb
{
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    // GET: api/values
    [HttpGet]
    public IEnumerable<KeyValuePair<string, int>> Get()
    {
      List<KeyValuePair<string, int>> dic = new List<KeyValuePair<string, int>>();
     
      dic.Add(new KeyValuePair<string,int>("This", 1));
      dic.Add(new KeyValuePair<string, int>("Is", 3));
      dic.Add(new KeyValuePair<string, int>("A", 2));
      dic.Add(new KeyValuePair<string, int>("Dictionary", 4));

      return dic;

    }

  }
}
