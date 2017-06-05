using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using Vista.OnDemand.Api.Models;

namespace Vista.OnDemand.Api.Controllers
{
    [RoutePrefix("api/film")]
    public class FilmController : ApiController
    {
        //nasty
        [Route("")]
        [HttpGet]
        public IEnumerable<Film> GetFilms()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://qa.moviexchange.com/");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var response = client.GetAsync("api/v1/releases").Result;
            if (response.IsSuccessStatusCode)
            {
                var films = response.Content.ReadAsAsync<IEnumerable<Film>>().Result
                                  .GroupBy(p => p.Title)
                                  .Select(g => g.First())
                                  .Take(200)
                                  .ToList();
                return films;
            }
            else
            {
                throw new Exception();

            }
        }
    }
}
