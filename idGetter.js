/*var iList = [], iList2 = [];
for (j = 15000; j < 19000; j++) {  // 11000 to 17242
  // 2nd API call to get recipe details
  var qURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + j;
  $.get(qURL2).done(function(response) {
    if (!(response.drinks == null)) {
      var results = response.drinks[0];
      for (k = 1; k <= 15; k++) {
        if (!(results["strIngredient" + k] == null)) {
          if (results["strIngredient" + k].trim().length > 0) {
            var ing = results["strIngredient" + k].trim();
            if (iList.indexOf(ing) == -1) {
              iList.push(ing);
              iList2.push(parseInt(results.idDrink));
            } 
          }
        }
      }
    }
  });
}*/
/* run in console:
iList.sort();
iList2.sort();

var sList = 'var iList = [';
for (i = 0; i < iList.length; i++) {
  sList += '"' + iList[i] + '"';
  if (i < iList.length - 1) {
    sList += ', ';
  }
}
sList += '];';
console.log(iList);
console.log(iList2);
console.log(sList);
*/

/*var ing1 = ["151 proof rum", "7-Up", "Absolut Citron", "Absolut Kurant", "Absolut Peppar", "Absolut Vodka", "Advocaat", "Ale", "Allspice", "Almond", "Almond flavoring", "Amaretto", "Angelica root", "Angostura bitters", "Anis", "Anise", "Anisette", "Aperol", "Apple", "Apple brandy", "Apple cider", "Apple juice", "Apple schnapps", "Applejack", "Apricot", "Apricot brandy", "Asafoetida", "Añejo rum", "Bailey's irish cream", "Banana", "Banana liqueur", "Beer", "Benedictine", "Berries", "Bitter lemon", "Bitters", "Black pepper", "Blackberry brandy", "Blackcurrant cordial", "Blended whiskey", "Blue Curacao", "Bourbon", "Brandy", "Brown sugar", "Butter", "Butterscotch schnapps", "Cachaca", "Candy", "Cantaloupe", "Caramel coloring", "Carbonated soft drink", "Carbonated water", "Cardamom", "Carrot", "Cayenne pepper", "Celery salt", "Chambord raspberry liqueur", "Champagne", "Cherry", "Cherry Heering", "Cherry brandy", "Cherry liqueur", "Chocolate", "Chocolate ice-cream", "Chocolate liqueur", "Chocolate syrup", "Cider", "Cinnamon", "Cloves", "Club soda", "Coca-Cola", "Cocoa powder", "Coconut liqueur", "Coconut syrup", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cointreau", "Condensed milk", "Coriander", "Cornstarch", "Cranberries", "Cranberry juice", "Cream", "Creme de Banane", "Creme de Cacao", "Creme de Cassis", "Crown Royal", "Cumin seed", "Curacao", "Daiquiri mix", "Dark Creme de Cacao", "Dark rum", "Dr. Pepper", "Drambuie", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg white", "Egg yolk", "Erin Cream", "Espresso", "Everclear", "Fennel seeds", "Firewater", "Food coloring", "Frangelico", "Fresca", "Fruit", "Fruit juice", "Fruit punch", "Galliano", "Gin", "Ginger", "Ginger ale", "Ginger beer", "Glycerine", "Godiva liqueur", "Goldschlager", "Grain alcohol", "Grand Marnier", "Grape juice", "Grape soda", "Grapefruit juice", "Grapes", "Green Chartreuse", "Green Creme de Menthe", "Grenadine", "Guava juice", "Guinness stout", "Half-and-half", "Heavy cream", "Honey", "Hot Damn", "Hot chocolate", "Ice", "Iced tea", "Irish cream", "Irish whiskey", "Jack Daniels", "Jello", "Jim Beam", "Johnnie Walker", "Jägermeister", "Kahlua", "Kiwi", "Kiwi liqueur", "Kool-Aid", "Kummel", "Lager", "Lemon", "Lemon juice", "Lemon peel", "Lemon vodka", "Lemon-lime soda", "Lemonade", "Licorice root", "Light cream", "Light rum", "Lime", "Lime juice", "Lime peel", "Lime vodka", "Malibu rum", "Mango", "Maple syrup", "Maraschino cherry", "Maraschino liqueur", "Marjoram leaves", "Marshmallows", "Midori melon liqueur", "Milk", "Mint", "Mint syrup", "Nutmeg", "Olive", "Orange", "Orange bitters", "Orange juice", "Orange peel", "Orange spiral", "Oreo cookie", "Orgeat syrup", "Ouzo", "Papaya", "Passion fruit juice", "Passion fruit syrup", "Peach Vodka", "Peach brandy", "Peach nectar", "Peach schnapps", "Peachtree schnapps", "Peppermint extract", "Peppermint schnapps", "Peychaud bitters", "Pina colada mix", "Pineapple", "Pineapple juice", "Pink lemonade", "Pisang Ambon", "Pisco", "Port", "Powdered sugar", "Raspberry syrup", "Red wine", "Ricard", "Rum", "Rye whiskey", "Salt", "Sambuca", "Sarsaparilla", "Scotch", "Sherbet", "Sherry", "Sirup of roses", "Sloe gin", "Soda water", "Sour mix", "Southern Comfort", "Spiced rum", "Sprite", "Strawberries", "Strawberry schnapps", "Sugar", "Sugar syrup", "Surge", "Sweet Vermouth", "Sweet and sour", "Tabasco sauce", "Tea", "Tequila", "Tia maria", "Tomato juice", "Tonic water", "Triple sec", "Vanilla", "Vanilla extract", "Vanilla ice-cream", "Vanilla vodka", "Vermouth", "Vodka", "Water", "Whipped cream", "Whipping cream", "Whiskey", "White Creme de Menthe", "White rum", "Wild Turkey", "Wine", "Worcestershire sauce", "Wormwood", "Yellow Chartreuse", "Yoghurt"];
var ing2 = ["151 proof rum", "7-Up", "Absinthe", "Absolut Citron", "Absolut Kurant", "Absolut Vodka", "Agave Syrup", "Agave syrup", "Amaretto", "Angostura Bitters", "Angostura bitters", "Apfelkorn", "Apple cider", "Apple juice", "Apricot Brandy", "Apricot brandy", "Aquavit", "Bacardi Limon", "Bailey's irish cream", "Baileys irish cream", "Banana", "Banana liqueur", "Beer", "Benedictine", "Bitters", "Black Sambuca", "Blackberries", "Blackberry brandy", "Blackcurrant squash", "Blue Curacao", "Blueberry schnapps", "Bourbon", "Brandy", "Brown sugar", "Butterscotch schnapps", "Cachaca", "Campari", "Chambord raspberry liqueur", "Champagne", "Cherries", "Cherry", "Cherry Grenadine", "Cherry brandy", "Chocolate Sauce", "Chocolate ice-cream", "Chocolate liqueur", "Chocolate milk", "Chocolate syrup", "Cider", "Cinnamon", "Club soda", "Coca-Cola", "Coconut liqueur", "Coconut milk", "Coconut rum", "Coffee", "Cognac", "Cointreau", "Corn syrup", "Corona", "Cranberry Juice", "Cranberry juice", "Cranberry vodka", "Cream", "Cream of coconut", "Creme de Banane", "Creme de Cacao", "Creme de Cassis", "Creme de Mure", "Crown Royal", "Dark Creme de Cacao", "Dark Rum", "Dark rum", "Dry Vermouth", "Egg White", "Egg Yolk", "Egg white", "Everclear", "Frangelico", "Fresh Lemon Juice", "Fresh Lime Juice", "Fruit", "Fruit juice", "Fruit punch", "Galliano", "Gin", "Ginger", "Ginger Beer", "Ginger ale", "Ginger beer", "Godiva liqueur", "Gold rum", "Gold tequila", "Goldschlager", "Grand Marnier", "Grapefruit Juice", "Grapefruit juice", "Green Creme de Menthe", "Grenadine", "Guinness stout", "Half-and-half", "Heavy cream", "Hot Damn", "Ice", "Irish cream", "Jack Daniels", "Jim Beam", "Jägermeister", "Kahlua", "Kirschwasser", "Kool-Aid", "Lager", "Lavender", "Lemon", "Lemon Juice", "Lemon juice", "Lemon peel", "Lemon-lime soda", "Lemonade", "Light cream", "Light rum", "Lillet Blanc", "Lime", "Lime Juice", "Lime juice", "Lime juice cordial", "Limeade", "Malibu rum", "Maraschino Cherry", "Maraschino Liqueur", "Maraschino cherry", "Maraschino liqueur", "Maui", "Melon liqueur", "Midori melon liqueur", "Milk", "Mini-snickers bars", "Mint", "Mountain Dew", "Nutmeg", "Olive", "Olive Brine", "Orange", "Orange Curacao", "Orange Juice", "Orange bitters", "Orange juice", "Orange peel", "Orgeat syrup", "Ouzo", "Passion fruit juice", "Peach Bitters", "Peach nectar", "Peach schnapps", "Peachtree schnapps", "Pepper", "Pepsi Cola", "Pernod", "Pineapple", "Pineapple Juice", "Pineapple Syrup", "Pineapple juice", "Pisang Ambon", "Pisco", "Port", "Powdered sugar", "Prosecco", "Raspberry Liqueur", "Raspberry vodka", "Red wine", "Root beer", "Rum", "Rumple Minze", "Salt", "Salted Chocolate", "Sambuca", "Schweppes Russchian", "Soda Water", "Soda water", "Sour mix", "Southern Comfort", "Sprite", "St. Germain", "Strawberries", "Strawberry liqueur", "Sugar", "Sugar Syrup", "Sugar syrup", "Surge", "Sweet Vermouth", "Sweet and sour", "Tea", "Tennessee whiskey", "Tequila", "Tomato Juice", "Triple Sec", "Triple sec", "Tropicana", "Vanilla Ice-Cream", "Vanilla extract", "Vanilla ice-cream", "Vermouth", "Vodka", "Water", "Whipped Cream", "Whipped cream", "Whisky", "White Creme de Menthe", "White Rum", "White rum", "Wild Turkey", "Yukon Jack", "Zima", "caramel sauce", "chocolate sauce", "demerara Sugar", "gin", "lemon", "lemon juice", "maraschino liqueur", "orange juice", "pineapple juice"];
for (i = 0; i < ing2.length; i++) {
  if (ing1.indexOf(ing2[i]) == -1) {
    ing1.push(ing2[i]);
  }
}
ing1.sort();
var tList = 'var tList = [';
for (n = 0; n < ing1.length; n++) {
  tList += '"' + ing1[n] + '"';
  if (n < ing1.length - 1) {
    tList += ', ';
  }
}
tList += '];';
console.log(tList);*/




/*var fullList = ["151 proof rum", "7-Up", "Absinthe", "Absolut Citron", "Absolut Kurant", "Absolut Peppar", "Absolut Vodka", "Advocaat", "Agave Syrup", "Agave syrup", "Ale", "Allspice", "Almond", "Almond flavoring", "Amaretto", "Angelica root", "Angostura Bitters", "Anis", "Anise", "Anisette", "Aperol", "Apfelkorn", "Apple", "Apple brandy", "Apple cider", "Apple juice", "Apple schnapps", "Applejack", "Apricot", "Apricot Brandy", "Aquavit", "Asafoetida", "Añejo rum", "Bacardi Limon", "Bailey's irish cream", "Banana", "Banana liqueur", "Beer", "Benedictine", "Berries", "Bitter lemon", "Bitters", "Black Sambuca", "Black pepper", "Blackberries", "Blackberry brandy", "Blackcurrant cordial", "Blackcurrant squash", "Blended whiskey", "Blue Curacao", "Blueberry schnapps", "Bourbon", "Brandy", "Brown sugar", "Butter", "Butterscotch schnapps", "Cachaca", "Campari", "Candy", "Cantaloupe", "Caramel coloring", "Carbonated soft drink", "Carbonated water", "Cardamom", "Carrot", "Cayenne pepper", "Celery salt", "Chambord raspberry liqueur", "Champagne", "Cherries", "Cherry", "Cherry Grenadine", "Cherry Heering", "Cherry brandy", "Cherry liqueur", "Chocolate", "Chocolate Sauce", "Chocolate ice-cream", "Chocolate liqueur", "Chocolate milk", "Chocolate syrup", "Cider", "Cinnamon", "Cloves", "Club soda", "Coca-Cola", "Cocoa powder", "Coconut liqueur", "Coconut milk", "Coconut rum", "Coconut syrup", "Coffee", "Coffee brandy", "Coffee liqueur", "Cognac", "Cointreau", "Condensed milk", "Coriander", "Corn syrup", "Cornstarch", "Corona", "Cranberries", "Cranberry Juice", "Cranberry vodka", "Cream", "Cream of coconut", "Creme de Banane", "Creme de Cacao", "Creme de Cassis", "Creme de Mure", "Crown Royal", "Cumin seed", "Curacao", "Daiquiri mix", "Dark Creme de Cacao", "Dark Rum", "Dr. Pepper", "Drambuie", "Dry Vermouth", "Dubonnet Rouge", "Egg", "Egg White", "Egg Yolk", "Egg white", "Egg yolk", "Erin Cream", "Espresso", "Everclear", "Fennel seeds", "Firewater", "Food coloring", "Frangelico", "Fresca", "Fresh Lemon Juice", "Fresh Lime Juice", "Fruit", "Fruit juice", "Fruit punch", "Galliano", "Gin", "Ginger", "Ginger Beer", "Ginger ale", "Glycerine", "Godiva liqueur", "Gold rum", "Gold tequila", "Goldschlager", "Grain alcohol", "Grand Marnier", "Grape juice", "Grape soda", "Grapefruit Juice", "Grapes", "Green Chartreuse", "Green Creme de Menthe", "Grenadine", "Guava juice", "Guinness stout", "Half-and-half", "Heavy cream", "Honey", "Hot Damn", "Hot chocolate", "Ice", "Iced tea", "Irish cream", "Irish whiskey", "Jack Daniels", "Jello", "Jim Beam", "Johnnie Walker", "Jägermeister", "Kahlua", "Kirschwasser", "Kiwi", "Kiwi liqueur", "Kool-Aid", "Kummel", "Lager", "Lavender", "Lemon", "Lemon Juice", "Lemon peel", "Lemon vodka", "Lemon-lime soda", "Lemonade", "Licorice root", "Light cream", "Light rum", "Lillet Blanc", "Lime", "Lime Juice", "Lime juice cordial", "Lime peel", "Lime vodka", "Limeade", "Malibu rum", "Mango", "Maple syrup", "Maraschino Cherry", "Maraschino Liqueur", "Maraschino cherry", "Marjoram leaves", "Marshmallows", "Maui", "Melon liqueur", "Midori melon liqueur", "Milk", "Mini-snickers bars", "Mint", "Mint syrup", "Mountain Dew", "Nutmeg", "Olive", "Olive Brine", "Orange", "Orange Curacao", "Orange Juice", "Orange bitters", "Orange peel", "Orange spiral", "Oreo cookie", "Orgeat syrup", "Ouzo", "Papaya", "Passion fruit juice", "Passion fruit syrup", "Peach Bitters", "Peach Vodka", "Peach brandy", "Peach nectar", "Peach schnapps", "Peachtree schnapps", "Pepper", "Peppermint extract", "Peppermint schnapps", "Pepsi Cola", "Pernod", "Peychaud bitters", "Pina colada mix", "Pineapple", "Pineapple Juice", "Pineapple Syrup", "Pink lemonade", "Pisang Ambon", "Pisco", "Port", "Powdered sugar", "Prosecco", "Raspberry Liqueur", "Raspberry syrup", "Raspberry vodka", "Red wine", "Ricard", "Root beer", "Rum", "Rumple Minze", "Rye whiskey", "Salt", "Salted Chocolate", "Sambuca", "Sarsaparilla", "Schweppes Russchian", "Scotch", "Sherbet", "Sherry", "Sirup of roses", "Sloe gin", "Soda Water", "Sour mix", "Southern Comfort", "Spiced rum", "Sprite", "St. Germain", "Strawberries", "Strawberry liqueur", "Strawberry schnapps", "Sugar", "Sugar Syrup", "Surge", "Sweet Vermouth", "Sweet and sour", "Tabasco sauce", "Tea", "Tennessee whiskey", "Tequila", "Tia maria", "Tomato Juice", "Tonic water", "Triple Sec", "Triple sec", "Tropicana", "Vanilla", "Vanilla Ice-Cream", "Vanilla extract", "Vanilla vodka", "Vermouth", "Vodka", "Water", "Whipped Cream", "Whipping cream", "Whiskey", "Whisky", "White Creme de Menthe", "White Rum", "White rum", "Wild Turkey", "Wine", "Worcestershire sauce", "Wormwood", "Yellow Chartreuse", "Yoghurt", "Yukon Jack", "Zima", "caramel sauce", "chocolate sauce", "demerara Sugar", "gin", "lemon", "lemon juice", "maraschino liqueur", "orange juice", "pineapple juice"];

var mList = 'var mixList = [';
for (x = 0; x < fullList.length; x++) {
  if (alcList.indexOf(fullList[x]) == -1) {
    if (!(mList == 'var mList = [')) {
      mList += ', ';
    }
    mList += '"' + fullList[x] + '"';
  }
}
mList += '];';
console.log(mList);*/

var alcList = ["151 proof rum", "Absinthe", "Absolut Citron", "Absolut Kurant", "Absolut Peppar", "Absolut Vodka", "Advocaat", "Ale", "Amaretto", "Angostura Bitters", "Anis", "Anise", "Anisette", "Aperol", "Apfelkorn", "Apple brandy", "Apple schnapps", "Applejack", "Apricot Brandy", "Aquavit", "Añejo rum", "Bacardi Limon", "Bailey's irish cream", "Banana liqueur", "Beer", "Benedictine", "Bitters", "Black Sambuca", "Blackberry brandy", "Blackcurrant cordial", "Blended whiskey", "Blue Curacao", "Blueberry schnapps", "Bourbon", "Brandy", "Butterscotch schnapps", "Cachaca", "Campari", "Chambord raspberry liqueur", "Champagne", "Cherry Heering", "Cherry brandy", "Cherry liqueur", "Chocolate liqueur", "Coconut liqueur", "Coconut rum", "Coffee brandy", "Coffee liqueur", "Cognac", "Cointreau", "Corona", "Cranberry vodka", "Creme de Banane", "Creme de Cacao", "Creme de Cassis", "Creme de Mure", "Crown Royal", "Curacao", "Dark Creme de Cacao", "Dark Rum", "Drambuie", "Dry Vermouth", "Dubonnet Rouge", "Erin Cream", "Everclear", "Firewater", "Frangelico", "Galliano", "Gin", "Godiva liqueur", "Gold rum", "Gold tequila", "Goldschlager", "Grain alcohol", "Grand Marnier", "Green Chartreuse", "Green Creme de Menthe", "Guinness stout", "Hot Damn", "Irish cream", "Irish whiskey", "Jack Daniels", "Jim Beam", "Johnnie Walker", "Jägermeister", "Kahlua", "Kirschwasser", "Kiwi liqueur", "Kummel", "Lager", "Lemon vodka", "Light rum", "Lillet Blanc", "Lime vodka", "Malibu rum", "Maraschino Liqueur", "Maui", "Melon liqueur", "Midori melon liqueur", "Orange Curacao", "Orange bitters", "Ouzo", "Peach Bitters", "Peach Vodka", "Peach brandy", "Peach schnapps", "Peachtree schnapps", "Peppermint schnapps", "Pernod", "Peychaud bitters", "Pisang Ambon", "Pisco", "Port", "Raspberry Liqueur", "Raspberry syrup", "Raspberry vodka", "Red wine", "Ricard", "Rum", "Rumple Minze", "Rye whiskey", "Sambuca", "Scotch", "Sherry", "Sirup of roses", "Sloe gin", "Southern Comfort", "Spiced rum", "St. Germain", "Strawberry liqueur", "Strawberry schnapps", "Sweet Vermouth", "Tennessee whiskey", "Tequila", "Tia maria", "Triple Sec", "Vanilla vodka", "Vermouth", "Vodka", "Whiskey", "Whisky", "White Creme de Menthe", "White Rum", "Wild Turkey", "Wine", "Yellow Chartreuse", "Yukon Jack", "Zima"];

var mixList = ["7-Up", "Agave Syrup", "Agave syrup", "Allspice", "Almond", "Almond flavoring", "Angelica root", "Apple", "Apple cider", "Apple juice", "Apricot", "Asafoetida", "Banana", "Berries", "Bitter lemon",  "Blackcurrant squash", "Black pepper", "Blackberries", "Brown sugar", "Butter", "Candy", "Cantaloupe", "Caramel coloring", "Caramel sauce", "Carbonated soft drink", "Carbonated water", "Cardamom", "Carrot", "Cayenne pepper", "Celery salt", "Cherries", "Cherry", "Cherry Grenadine", "Chocolate", "Chocolate Sauce", "Chocolate ice-cream", "Chocolate milk", "Chocolate syrup", "Cider", "Cinnamon", "Cloves", "Club soda", "Coca-Cola", "Cocoa powder", "Coconut milk", "Coconut syrup", "Coffee", "Condensed milk", "Coriander", "Corn syrup", "Cornstarch", "Cranberries", "Cranberry Juice", "Cream", "Cream of coconut", "Cumin seed", "Daiquiri mix", "Demerara Sugar", "Dr. Pepper", "Egg", "Egg White", "Egg Yolk", "Espresso", "Fennel seeds", "Food coloring", "Fresca", "Fresh Lemon Juice", "Fresh Lime Juice", "Fruit", "Fruit juice", "Fruit punch", "Ginger", "Ginger Beer", "Ginger ale", "Glycerine", "Grape juice", "Grape soda", "Grapefruit Juice", "Grapes", "Grenadine", "Guava juice", "Half-and-half", "Heavy cream", "Honey", "Hot chocolate", "Ice", "Iced tea", "Jello", "Kiwi", "Kool-Aid", "Lavender", "Lemon", "Lemon Juice", "Lemon peel", "Lemon-lime soda", "Lemonade", "Licorice root", "Light cream", "Lime", "Lime Juice", "Lime juice cordial", "Lime peel", "Limeade", "Mango", "Maple syrup", "Maraschino Cherry", "Maraschino Liqueur", "Marjoram leaves", "Marshmallows", "Milk", "Mini-snickers bars", "Mint", "Mint syrup", "Mountain Dew", "Nutmeg", "Olive", "Olive Brine", "Orange", "Orange Juice", "Orange peel", "Orange spiral", "Oreo cookie", "Orgeat syrup", "Papaya", "Passion fruit juice", "Passion fruit syrup", "Peach nectar", "Pepper", "Peppermint extract", "Pepsi Cola", "Pina colada mix", "Pineapple", "Pineapple Juice", "Pineapple Syrup", "Pink lemonade", "Powdered sugar", "Prosecco", "Root beer", "Salt", "Salted Chocolate", "Sarsaparilla", "Schweppes Russchian", "Sherbet", "Soda Water", "Sour mix", "Sprite", "Strawberries", "Sugar", "Sugar Syrup", "Surge", "Sweet and sour", "Tabasco sauce", "Tea", "Tomato Juice", "Tonic water", "Triple sec", "Tropicana", "Vanilla", "Vanilla Ice-Cream", "Vanilla extract", "Water", "Whipped Cream", "Whipping cream", "White rum", "Worcestershire sauce", "Wormwood", "Yoghurt"];

