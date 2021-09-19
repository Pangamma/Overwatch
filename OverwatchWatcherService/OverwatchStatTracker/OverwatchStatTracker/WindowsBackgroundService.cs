using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OverwatchStatTracker
{
    public sealed class WindowsBackgroundService : BackgroundService
    {
        private readonly OverwatchApiService apiService;
        private readonly ILogger<WindowsBackgroundService> _logger;
        private bool wasOverwatchRunning = false;

        private bool IsOverwatchRunningRightNow()
        {
            Process[] pname = Process.GetProcesses();
            var matches = pname.Where(x => x.ProcessName.Equals("Overwatch", StringComparison.InvariantCultureIgnoreCase)).ToArray();
            return matches.Any();
        }

        public WindowsBackgroundService(
            OverwatchApiService jokeService,
            ILogger<WindowsBackgroundService> logger) =>
            (apiService, _logger) = (jokeService, logger);

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    bool isRunningNOW = this.IsOverwatchRunningRightNow();

                    if (isRunningNOW != wasOverwatchRunning)
                    {
                        if (isRunningNOW)
                        {
                            // Start "overwatch-is-running" logic.
                            wasOverwatchRunning = true;
                            _logger.LogInformation("Overwatch is running now.");
                            await Task.Delay(TimeSpan.FromSeconds(300), stoppingToken); // once every 5m
                            continue;
                        }

                        if (!isRunningNOW)
                        {
                            // start logger count-down
                            wasOverwatchRunning = false;
                            _logger.LogInformation("Overwatch stopped. About to log stats to the service.");
                            await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);
                            // Send updates to overwatch stat tracker api
                            string heroes = "ashe,bastion,genji,hanzo,junkrat,mccree,mei,pharah,reaper,soldier76,sombra,symmetra,torbjorn,tracer,widowmaker,echo,ana,baptiste,lucio,mercy,zenyatta,moira,brigitte,dVa,orisa,reinhardt,roadhog,winston,zarya";
                            await apiService.SendUpdates("Pangamma-1859", heroes);
                            await apiService.SendUpdates("Deiya-11707", heroes);
                            await Task.Delay(TimeSpan.FromSeconds(60), stoppingToken);
                            continue;
                        }
                    }

                    if (isRunningNOW)
                    {
                        await Task.Delay(TimeSpan.FromSeconds(2), stoppingToken);
                    } 
                    else
                    {
                        await Task.Delay(TimeSpan.FromSeconds(60), stoppingToken);
                    }
                }
                catch (OperationCanceledException)
                {
                    break;
                }
            }
        }
    }
}
