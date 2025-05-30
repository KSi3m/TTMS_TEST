using System.Diagnostics.Eventing.Reader;
using TTMS.Dtos;
using TTMS.Entities;

namespace TTMS.Repositories
{
    public interface ITelephoneRepository
    {
        public List<Telephone> _dbTemp { get; set; }

        List<Telephone> GetTelephones();

        Telephone? GetTelephone(int id);

        bool CreateTelephone(CreateTelephoneDto telDto);
        bool DeleteTelephone(int id);

        bool UpdateTelephone(int id, CreateTelephoneDto phone);



    }
}
