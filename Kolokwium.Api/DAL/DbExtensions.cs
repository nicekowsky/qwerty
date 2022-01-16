using Microsoft.Extensions.DependencyInjection;
using Kolokwium.Api.Models;

namespace Kolokwium.Api.DAL {
    public static class DbExtensions {
        public static void SeedData (this IServiceCollection serviceCollection) {
            var serviceProvider = serviceCollection.BuildServiceProvider ();
            var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext> ();
            dbContext.AddRange (
                new Autor() {
                    Id = 1,
                        FirstName = "Adam",
                        LastName = "Nowak",
                        Email = "a.n@gmail.com"
                },
                new Autor() {
                    Id = 2,
                        FirstName = "Michał",
                        LastName = "Kasprzyk",
                        Email = "m.k@gmail.com"
                }
            );
            dbContext.SaveChanges ();
        }
    }
}