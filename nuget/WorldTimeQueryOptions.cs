using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WorldTime
{
    /// <summary>
    /// Query options for the World Time API
    /// </summary>
    public class WorldTimeQueryOptions
    {
        /// <summary>
        /// The city name for which you want to get the current time (e.g., New York). Add a state, province or country after a comma to narrow it (e.g., Portland, Maine or London, UK). Matches are ordered with the best-known city first
        /// </summary>
        [JsonProperty("city")]
        public string City { get; set; }
    }
}
