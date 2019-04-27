// javascript

import ded from './DocumentElementDecoder.js'
import { projects, writings } from './content.js'

const listOfProjects = projects
  .sort((a, b) => b.date.getTime() - a.date.getTime())
  .reduce((acc, item) => {
    acc.appendChild(
      ded([
        'li pa2 black-40',
        [
          'a b black-50 link hover-light-red underline',
          { href: item.link },
          item.title
        ],
        `: ${item.description}`,
        [
          'p pa0 ma0 f6 i',
          item.date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
          })
        ]
      ])
    )

    return acc
  }, ded(['ul list pa0 f5 code']))

document.getElementById('projects').appendChild(listOfProjects)

const listOfWritings = writings
  .sort((a, b) => b.date.getTime() - a.date.getTime())
  .reduce(
    (acc, item) => (
      acc.appendChild(
        ded([
          'li pa2 black-40',
          [
            'a b black-50 link hover-dark-blue underline',
            { href: item.link },
            item.title
          ],
          // `: ${item.description}`,
          [
            'p pa0 ma0 f6 i',
            item.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })
          ]
        ])
      ),
      acc
    ),
    ded(['ul list pa0 f5 code'])
  )

document.getElementById('tuts').appendChild(listOfWritings)
