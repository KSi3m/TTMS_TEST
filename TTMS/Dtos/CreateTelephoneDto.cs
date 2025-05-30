using System.ComponentModel.DataAnnotations;

namespace TTMS.Dtos
{
    public class CreateTelephoneDto
    {
        [StringLength(15)]
        public string Name { get; set; }
        [RegularExpression("^\\d{9}$", ErrorMessage = "You must supply 9 digits")]
        public string Number { get; set; }
    }
}
