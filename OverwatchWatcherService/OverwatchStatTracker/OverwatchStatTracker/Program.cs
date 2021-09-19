using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OverwatchStatTracker;

/// <summary>
/// https://docs.microsoft.com/en-us/dotnet/core/extensions/windows-service
/// </summary>
using IHost host = Host.CreateDefaultBuilder(args)
    .UseWindowsService(options =>
    {
        options.ServiceName = ".NET Overwatch stats updater";
    })
    .ConfigureServices((hostContext, services) =>
    {
        services.AddHostedService<WindowsBackgroundService>();
        services.AddHttpClient<OverwatchApiService>();
    }).Build();

await host.RunAsync();