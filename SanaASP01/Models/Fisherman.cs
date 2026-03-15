using System.ComponentModel.DataAnnotations;

namespace SanaASP01.Models
{
    public class Fisherman
    {
        [Display(Name = "Введіть прізвище")]
        [Required(ErrorMessage = "Поле 'Прізвище' порожнє. Введи дані!")]
        [RegularExpression(@"^[А-ЯІЇЄҐа-яіїєґ]+$", ErrorMessage = "Прізвище має містити ТІЛЬКИ українські літери без пробілів та інших знаків!")]
        public string Lastname { get; set; }

        [Display(Name = "Введіть ім'я")]
        [Required(ErrorMessage = "Поле 'Ім'я' порожнє. Введи дані!")]
        [RegularExpression(@"^[А-ЯІЇЄҐа-яіїєґ]+$", ErrorMessage = "Ім'я має містити ТІЛЬКИ українські літери без пробілів та інших знаків!")]
        public string Firstname { get; set; }

        [Display(Name = "Вкажіть ваш вік")]
        [Required(ErrorMessage = "Ти забув вказати вік!")]
        [Range(14, 100, ErrorMessage = "В клуб приймаємо тільки від 14 до 100 років!")]
        public int? Age { get; set; } 

        [Display(Name = "Оберіть цільову рибу")]
        [Required(ErrorMessage = "Обери рибу, на яку полюєш!")]
        public string TargetFish { get; set; }

        [Display(Name = "Оберіть основну снасть")]
        [Required(ErrorMessage = "Обери свою основну снасть зі списку!")]
        public string GearType { get; set; } 

        [Display(Name = "Чи маєте власний човен?")]
        public bool HasBoat { get; set; }
    }
}
