// public class Main {
//     public static void main(String[] args) {
//         int a = 10;

//         if (a == 10) {
//             System.out.println("Верно");
//         } else {
//             System.out.println("Неверно");
//         }
//     }
// }


// ///////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int min = 30; // Пример значения переменной min

//         if (min >= 0 && min <= 59) {
//             if (min < 15) {
//                 System.out.println("Первая четверть часа");
//             } else if (min < 30) {
//                 System.out.println("Вторая четверть часа");
//             } else if (min < 45) {
//                 System.out.println("Третья четверть часа");
//             } else {
//                 System.out.println("Четвертая четверть часа");
//             }
//         } else {
//             System.out.println("Некорректное значение минут");
//         }
//     }
// }

// /////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int min = 30; // Пример значения переменной min

//         if (min >= 0 && min <= 59) {
//             if (min < 15) {
//                 System.out.println("Первая четверть часа");
//             } else if (min < 30) {
//                 System.out.println("Вторая четверть часа");
//             } else if (min < 45) {
//                 System.out.println("Третья четверть часа");
//             } else {
//                 System.out.println("Четвертая четверть часа");
//             }
//         } else {
//             System.out.println("Некорректное значение минут");
//         }
//     }
// }


// ////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         String lang = "ru";
//         String[] arr;

//         if ("ru".equals(lang)) {
//             arr = new String[]{"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"};
//         } else if ("en".equals(lang)) {
//             arr = new String[]{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
//         } else {
//             System.out.println("Некорректное значение переменной lang");
//             return;
//         }

//         for (String day : arr) {
//             System.out.println(day);
//         }
//     }
// }

// //////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         String lang = "ru";
//         String[] arr;

//         switch (lang) {
//             case "ru":
//                 arr = new String[]{"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"};
//                 break;
//             case "en":
//                 arr = new String[]{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
//                 break;
//             default:
//                 System.out.println("Некорректное значение переменной lang");
//                 return;
//         }

//         for (String day : arr) {
//             System.out.println(day);
//         }
//     }
// }

// /////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         String lang = "ru";
//         String[][] daysOfWeek = {
//                 {"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"},
//                 {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}
//         };

//         int index = "ru".equals(lang) ? 0 : "en".equals(lang) ? 1 : -1;

//         if (index != -1) {
//             for (String day : daysOfWeek[index]) {
//                 System.out.println(day);
//             }
//         } else {
//             System.out.println("Некорректное значение переменной lang");
//         }
//     }
// }


// ///////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
// // 1
//         int a1 = 1;
//           System.out.println(a1 == 0 ? "Верно" : "Неверно");
// // 2
//         int a2 = 0;
//         System.out.println(a2 > 0 ? "Верно" : "Неверно");
// // 3 
//         int a3 = -3;
//         System.out.println(a3 < 0 ? "Верно" : "Неверно");
// // 4
//         int a4 = 1;
//         System.out.println(a4 >= 0 ? "Верно" : "Неверно");
// // 5
//         int a5 = -3;
//         System.out.println(a5 <= 0 ? "Верно" : "Неверно");
// // 6
//         int a6 = 1;
//         System.out.println(a6 != 0 ? "Верно" : "Неверно");
// // 7
//         String a7 = "test";
//         System.out.println(a7.equals("test") ? "Верно" : "Неверно");
// // 8
//         Object a8 = "1";
//         System.out.println(a8.equals("1") ? "Верно" : "Неверно");
// // 9
//     }
// }

// //////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int a1 = 5;
//         int a2 = 0;
//         int a3 = -3;
//         int a4 = 2;

//         System.out.println((a1 > 0 && a1 < 5) ? "Верно" : "Неверно");
//         System.out.println((a2 > 0 && a2 < 5) ? "Верно" : "Неверно");
//         System.out.println((a3 > 0 && a3 < 5) ? "Верно" : "Неверно");
//         System.out.println((a4 > 0 && a4 < 5) ? "Верно" : "Неверно");
//     }
// }

// ///////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int a1 = 5;
//         int a2 = 0;
//         int a3 = -3;
//         int a4 = 2;

//         // Для a1
//         if (a1 == 0 || a1 == 2) {
//             a1 += 7;
//         } else {
//             a1 /= 10;
//         }
//         System.out.println("a1: " + a1);

//         // Для a2
//         if (a2 == 0 || a2 == 2) {
//             a2 += 7;
//         } else {
//             a2 /= 10;
//         }
//         System.out.println("a2: " + a2);

//         // Для a3
//         if (a3 == 0 || a3 == 2) {
//             a3 += 7;
//         } else {
//             a3 /= 10;
//         }
//         System.out.println("a3: " + a3);

//         // Для a4
//         if (a4 == 0 || a4 == 2) {
//             a4 += 7;
//         } else {
//             a4 /= 10;
//         }
//         System.out.println("a4: " + a4);
//     }
// }

// ///////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int a1 = 1, b1 = 3;
//         int a2 = 0, b2 = 6;
//         int a3 = 3, b3 = 5;

//         // Для a1 и b1
//         if (a1 <= 1 && b1 >= 3) {
//             System.out.println("Сумма: " + (a1 + b1));
//         } else {
//             System.out.println("Разность: " + (a1 - b1));
//         }

//         // Для a2 и b2
//         if (a2 <= 1 && b2 >= 3) {
//             System.out.println("Сумма: " + (a2 + b2));
//         } else {
//             System.out.println("Разность: " + (a2 - b2));
//         }

//         // Для a3 и b3
//         if (a3 <= 1 && b3 >= 3) {
//             System.out.println("Сумма: " + (a3 + b3));
//         } else {
//             System.out.println("Разность: " + (a3 - b3));
//         }
//     }
// }

// ///////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int a1 = 3, b1 = 7;
//         int a2 = 2, b2 = 14;
//         int a3 = 11, b3 = 6;

//         // Для a1 и b1
//         if ((a1 > 2 && a1 < 11) || (b1 >= 6 && b1 < 14)) {
//             System.out.println("Верно");
//         } else {
//             System.out.println("Неверно");
//         }

//         // Для a2 и b2
//         if ((a2 > 2 && a2 < 11) || (b2 >= 6 && b2 < 14)) {
//             System.out.println("Верно");
//         } else {
//             System.out.println("Неверно");
//         }

//         // Для a3 и b3
//         if ((a3 > 2 && a3 < 11) || (b3 >= 6 && b3 < 14)) {
//             System.out.println("Верно");
//         } else {
//             System.out.println("Неверно");
//         }
//     }
// }

// /////////////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int num = 3;
//         String result;

//         switch (num) {
//             case 1:
//                 result = "зима";
//                 break;
//             case 2:
//                 result = "весна";
//                 break;
//             case 3:
//                 result = "лето";
//                 break;
//             case 4:
//                 result = "осень";
//                 break;
//             default:
//                 result = "Некорректное значение переменной num";
//                 break;
//         }

//         System.out.println(result);
//     }
// }


// ///////////////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int day = 15; // Пример значения переменной day

//         if (day >= 1 && day <= 10) {
//             System.out.println("Число " + day + " попадает в первую декаду месяца");
//         } else if (day > 10 && day <= 20) {
//             System.out.println("Число " + day + " попадает во вторую декаду месяца");
//         } else if (day > 20 && day <= 31) {
//             System.out.println("Число " + day + " попадает в третью декаду месяца");
//         } else {
//             System.out.println("Некорректное значение переменной day");
//         }
//     }
// }


// ///////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         int month = 8; 

//         if (month >= 1 && month <= 12) {
//             if (month >= 3 && month <= 5) {
//                 System.out.println("Весна");
//             } else if (month >= 6 && month <= 8) {
//                 System.out.println("Лето");
//             } else if (month >= 9 && month <= 11) {
//                 System.out.println("Осень");
//             } else {
//                 System.out.println("Зима");
//             }
//         } else {
//             System.out.println("Некорректное значение переменной month");
//         }
//     }
// }

// //////////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         String str = "abcde"; 

//         if (str.length() > 0 && str.charAt(0) == 'a') {
//             System.out.println("да");
//         } else {
//             System.out.println("нет");
//         }
//     }
// }

// /////////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         String str = "12345"; // Пример строки

//         if (str.length() > 0) {
//             char firstChar = str.charAt(0);
//             if (firstChar == '1' || firstChar == '2' || firstChar == '3') {
//                 System.out.println("да");
//             } else {
//                 System.out.println("нет");
//             }
//         } else {
//             System.out.println("нет");
//         }
//     }
// }

// /////////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         String str = "123";

//         if (str.length() == 3) {
//             char firstDigit = str.charAt(0);
//             char secondDigit = str.charAt(1);
//             char thirdDigit = str.charAt(2);

//             if (Character.isDigit(firstDigit) && Character.isDigit(secondDigit) && Character.isDigit(thirdDigit)) {
//                 int sum = Character.getNumericValue(firstDigit) + Character.getNumericValue(secondDigit) + Character.getNumericValue(thirdDigit);
//                 System.out.println("Сумма цифр: " + sum);
//             } else {
//                 System.out.println("Строка не состоит из трех цифр");
//             }
//         } else {
//             System.out.println("Строка не состоит из трех символов");
//         }
//     }
// }

// /////////////////////////////////////////////////////////////

// public class Main {
//     public static void main(String[] args) {
//         String str = "123456"; // Пример строки из 6 цифр

//         if (str.length() == 6) {
//             char firstDigit1 = str.charAt(0);
//             char secondDigit1 = str.charAt(1);
//             char thirdDigit1 = str.charAt(2);

//             char firstDigit2 = str.charAt(3);
//             char secondDigit2 = str.charAt(4);
//             char thirdDigit2 = str.charAt(5);

//             if (Character.isDigit(firstDigit1) && Character.isDigit(secondDigit1) && Character.isDigit(thirdDigit1) &&
//                 Character.isDigit(firstDigit2) && Character.isDigit(secondDigit2) && Character.isDigit(thirdDigit2)) {
                
//                 int sum1 = Character.getNumericValue(firstDigit1) + Character.getNumericValue(secondDigit1) + Character.getNumericValue(thirdDigit1);
//                 int sum2 = Character.getNumericValue(firstDigit2) + Character.getNumericValue(secondDigit2) + Character.getNumericValue(thirdDigit2);

//                 if (sum1 == sum2) {
//                     System.out.println("да");
//                 } else {
//                     System.out.println("нет");
//                 }
//             } else {
//                 System.out.println("Строка не состоит из 6 цифр");
//             }
//         } else {
//             System.out.println("Строка не состоит из 6 символов");
//         }
//     }
// }


// /////////////////////////////////////////////////////////////////////