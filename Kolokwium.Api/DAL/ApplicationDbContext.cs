using Microsoft.EntityFrameworkCore;
using Kolokwium.Api.Models;

namespace Kolokwium.Api {
    public class ApplicationDbContext : DbContext {

        public DbSet<Autor> Autorzy {get;set;}
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options) : base (options) { }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring (optionsBuilder);
        }

        protected override void OnModelCreating (ModelBuilder modelBuilder) {
            base.OnModelCreating (modelBuilder);
            
            modelBuilder.Entity<Autor>(AuthorBuilder => {
                AuthorBuilder.Property(author => author.FirstName).IsRequired();
                AuthorBuilder.Property(author => author.LastName).IsRequired();
                AuthorBuilder.Property(author => author.Email).IsRequired();
            });
        }
    }
}