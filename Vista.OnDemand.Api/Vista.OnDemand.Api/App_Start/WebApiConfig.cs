using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Vista.OnDemand.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // cors
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            //json
            GlobalConfiguration.Configuration.Formatters.Clear();
            var jsonFormat = new JsonMediaTypeFormatter();
            jsonFormat.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            GlobalConfiguration.Configuration.Formatters.Add(jsonFormat);
            // Web API routes

            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }
    }
}
