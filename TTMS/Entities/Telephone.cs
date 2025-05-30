using System.ComponentModel.DataAnnotations;

namespace TTMS.Entities
{
    public class Telephone
    {

        public int Id { get; set; }
        [StringLength(15)]
        public string Name { get; set; }
        [RegularExpression("^\\d{9}$", ErrorMessage = "You must supply 9 digits")]
        public string Number { get; set; }
    }
}
