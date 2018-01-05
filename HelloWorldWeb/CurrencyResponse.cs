using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelloWorldWeb
{
  public class CurrencyResponse
  {
    public string @base
    {
      get;
      set;
    }
    public DateTime date
    {
      get;
      set;

    }

    public Dictionary<string, double> rates
    {
      get;
      set;
    }

  }
}
