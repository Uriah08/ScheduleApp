using ScheduleApp.Models.Auth;

namespace ScheduleApp.Services
{
    public interface ITokenService
    {
        string GenerateJwtToken(ApplicationUser user);
        DateTime GetTokenExpiration();
    }
}