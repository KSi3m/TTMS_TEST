
using TTMS.Repositories;

namespace TTMS
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            //sytuacja wyj�tkowa �e repozytorium jest singletonem xd
            builder.Services.AddSingleton<ITelephoneRepository,TelephoneRepository>();

            builder.Services.AddCors(options => options.AddPolicy("AngularPolicy", policy =>
            {
                policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();

            }));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("AngularPolicy");

            app.UseHttpsRedirection();

            app.UseAuthorization();
           

            app.MapControllers();

            app.Run();
        }
    }
}
