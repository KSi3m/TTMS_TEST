using TTMS.Dtos;
using TTMS.Entities;

namespace TTMS.Repositories
{
    public class TelephoneRepository : ITelephoneRepository
    {
        public List<Telephone> _dbTemp { get; set; } = new List<Telephone>() {
            new Telephone(){Id = 1, Name= "Test1", Number="123456789"}
        };

        public static int IdCounter = 2;

        public bool CreateTelephone(CreateTelephoneDto telDto)
        {
            if(telDto != null)
            {
                Telephone tel = new Telephone()
                {
                    Id = IdCounter++,
                    Name = telDto.Name,
                    Number = telDto.Number,
                };
                _dbTemp.Add(tel);
                return true;
            }
            return false;
        }

        public bool DeleteTelephone(int id)
        {
            var tel = this._dbTemp.FirstOrDefault(x => x.Id == id);
            if(tel != null)
            {
                this._dbTemp.Remove(tel);
                return true;
            }
            return false;
        }

        public Telephone? GetTelephone(int id)
        {
            return this._dbTemp.FirstOrDefault(x => x.Id == id);
        }

        public List<Telephone> GetTelephones()
        {
            return this._dbTemp;
        }

        public bool UpdateTelephone(int id, CreateTelephoneDto telDto)
        {
            if (telDto == null) return false;

            var tel =  this._dbTemp.FirstOrDefault(x => x.Id == id);
            if(tel != null)
            {
                tel.Name = telDto.Name;
                tel.Number = telDto.Number;
                return true;
            }
            return false;
            
        }
    }
}
