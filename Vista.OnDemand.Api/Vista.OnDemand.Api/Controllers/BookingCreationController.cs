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
    [RoutePrefix("api/booking")]
    public class BookingCreationController : ApiController
    {

        [Route("")]
        [HttpPost]
        public void CreateGroupSalesPrivateBooking()
        {

        }
    }
}
