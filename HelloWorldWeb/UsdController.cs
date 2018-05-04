using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HelloWorldWeb
{
  [Route("api/[controller]")]
  public class UsdController : Controller
  {
    // GET: api/values
    [HttpGet]
    public IEnumerable<KeyValuePair<string, double>> Get()
    {
      List<KeyValuePair<string, double>> dic = new List<KeyValuePair<string, double>>();

      HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://api.fixer.io/latest?base=USD");
      HttpClient client = new HttpClient();
    
      //request.AutomaticDecompression = DecompressionMethods.GZip;
      string json = string.Empty;
      using (HttpResponseMessage response = client.GetAsync("https://api.fixer.io/latest?base=USD").Result)      
      {
        json = response.Content.ReadAsStringAsync().Result;
      }
    

      CurrencyResponse currencies = Newtonsoft.Json.JsonConvert.DeserializeObject<CurrencyResponse>(json);
      //currencies
      foreach (KeyValuePair<string, double> rate in currencies.rates)
      {
        dic.Add(new KeyValuePair<string, double>(rate.Key, rate.Value));

      }


      

      return dic.OrderBy(k=>k.Key);

    }

  }

  
}
