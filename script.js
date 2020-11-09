// data 

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteenHundreds = inventors.filter(person => {
        if (person.year >= 1500 && person.year <= 1599) {
            return person.first && person.last // or return true
        }
    })
    console.log(fifteenHundreds)



    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const inventorMap = inventors.map(person => {
        return person.first + " " + person.last 
        // return `${person.first} ${person.last}`
    })

    console.log(inventorMap)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // sort gives you two arguements to use, (a) and (b)... it converts elements into 
    // strings then compares them to their UTF-16 unit values. All undefined
    // is sorted to the end of an array. it returns positions based on -1 or 1

    // Because, when we do a-b, if a > b then it returns number > 0. 
    // If a<b, then it returns < 0. When a=b , then it returns 0.
    // To sort numbers in Descending Order, just change the a-b to b-a .

  const sortInventors = inventors.sort(function(old, young) {
      if (old.year > young.year) {
          return 1;
      } else {
          return -1;
      }
  })

  // or inventors.sort(old, young => old.year > young.year ? 1 : -1);

    console.table(sortInventors)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    //total (accumulator) is like setting an empty array that adds everything into it
    // currentValue is the loop you set, where you can add or subtract everything together
    const reduceInvestors = inventors.reduce((total, currentValue) => {
        return total + (currentValue.passed - currentValue.year);
    }, 0)

    // must add zero at end

    console.log(reduceInvestors)

    // 5. Sort the inventors by years lived
    // pesedo code ---
    // we are comparing one inventor to the other
    // set up variables for a and b 
    // years lived means subtracted years
    // create an if statement... if a is bigger than b 
    // return 1 else -1 

    const sortYears = inventors.sort((a, b) => {
        const firstInventor = a.passed - a.year;
        const secondInventor = b.passed - b.year;

        if (firstInventor > secondInventor) {
            return -1;
        } else {
            return 1;
        }
    })

    console.table(sortYears)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // let findDe = links.map(link => link.textContent).filter(boulevard => boulevard.includes("de"));



    // 7. sort Exercise
    // Sort the people alphabetically by last name
    // pesudo-code ---
    // we want to go through the list and return the list
    // const lastNamesList = inventors.map(names => {
    //     return names.last
    // })

    // const sortLastNames = lastNamesList.sort()
    // console.log(sortLastNames)

    // we must split the names into parts
    const array = people.sort((last, next) => {
       let [alast, afirst] = last.split(', ');
       let [blast, bfirst] =  next.split(', ');
       return alast > blast ? 1 : -1;
    })

    console.log(array);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    //how many times have this word occurred in array?
    // must loop through
    // must hold data
    // must compare string to previous string
    // if string is not similar, don't add, otherwise do add

    // const duplicates = [];

    // const looping = data.map(item => item !==  )

    // use reduce...

    const vehicles = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0
        }
        obj[item]++
        return obj
    }, {})

    console.log("vehicles reduce function", vehicles)

