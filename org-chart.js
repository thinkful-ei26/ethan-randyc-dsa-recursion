'use strict';

const peopleHierarchy = [
  {name:'Zuckerberg', boss: null},
  {name:'Schroepfer', boss: 'Zuckerberg'},
  {name:'Bosworth', boss: 'Schroepfer'},
  {name:'Steve', boss: 'Bosworth'},
  {name:'Kyle', boss: 'Bosworth'},
  {name:'Andra', boss: 'Bosworth'},
  {name:'Zhao', boss: 'Schroepfer'},
  {name:'Richie', boss: 'Zhao'},
  {name:'Sofia', boss: 'Zhao'},
  {name:'Jen', boss: 'Zhao'},
  {name:'Schrage', boss: 'Zuckerberg'},
  {name:'VanDyck', boss: 'Schrage'},
  {name:'Sabrina', boss: 'VanDyck'},
  {name:'Michelle', boss: 'VanDyck'},
  {name:'Josh', boss: 'VanDyck'},
  {name:'Swain', boss: 'Schrage'},
  {name:'Blanch', boss: 'Swain'},
  {name:'Tom', boss: 'Swain'},
  {name:'Joe', boss: 'Swain'},
  {name:'Sandberg', boss: 'Zuckerberg'},
  {name:'Goler', boss: 'Sandberg'},
  {name:'Eddie', boss: 'Goler'},
  {name:'Julie', boss: 'Goler'},
  {name:'Annie', boss: 'Goler'},
  {name:'Hernandez', boss: 'Sandberg'},
  {name:'Rowi', boss: 'Hernandez'},
  {name:'Inga', boss: 'Hernandez'},
  {name:'Morgan', boss: 'Hernandez'},
  {name:'Moissinac', boss: 'Sandberg'},
  {name:'Amy', boss: 'Moissinac'},
  {name:'Chuck', boss: 'Moissinac'},
  {name:'Vinni', boss: 'Moissinac'},
  {name:'Kelley', boss: 'Sandberg'},
  {name:'Eric', boss: 'Kelley'},
  {name:'Ana', boss: 'Kelley'},
  {name:'Wes', boss: 'Kelley'}
];

function traverse(peopleHierarchy, boss) {
  let node = {};
  peopleHierarchy.filter(person => person.boss === boss)
                  .forEach(person => node[person.name] = traverse(peopleHierarchy, person.name));
  return node;
}

console.dir(traverse(peopleHierarchy, null));