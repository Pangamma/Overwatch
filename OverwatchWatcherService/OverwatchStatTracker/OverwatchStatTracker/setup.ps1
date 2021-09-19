if (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator"))  
{  
  $arguments = "& '" +$myinvocation.mycommand.definition + "'"
  Start-Process powershell -Verb runAs -ArgumentList $arguments
  Break
}

sc.exe create ".NET Overwatch stats updater" binpath=D:\git\Overwatch\OverwatchWatcherService\OverwatchStatTracker\OverwatchStatTracker\publish\OverwatchStatTracker.exe