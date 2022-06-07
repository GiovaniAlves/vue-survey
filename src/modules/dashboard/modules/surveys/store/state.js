const tmpSurveys = [
   {
      id: 1,
      title: 'Laravel 8',
      slug: 'laravel-8',
      status: 'draft',
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Du-AwQeo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vhq2zqagmeyjsuk0f9ub.png',
      image_url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Du-AwQeo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vhq2zqagmeyjsuk0f9ub.png',
      description: 'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
      created_at: '2021-12-20 18:00:00',
      updated_at: '2021-12-20 18:00:00',
      expire_date: '2021-12-31 18:00:00',
      questions: [
         {
            id: 1,
            type: 'select',
            question: 'From which country are you?',
            description: null,
            data: {
               options: [
                  {uuid: 'djdfçkdsflkdsajlfhajds1', text: 'USA'},
                  {uuid: 'djdfçkdsflkdsajlfhajds2', text: 'Brasil'},
                  {uuid: 'djdfçkdsflkdsajlfhajds3', text: 'Georgia'},
                  {uuid: 'djdfçkdsflkdsajlfhajds4', text: 'Japão'},
               ]
            }
         },
         {
            id: 2,
            type: 'checkbox',
            question: 'which language do you see on the channel?',
            description: 'loren fsd fdsa fsdafasd fasdfasdf sda sd',
            data: {
               options: [
                  {uuid: 'djdfçkdsflkdsajlfhajdsa', text: 'JavaScript'},
                  {uuid: 'djdfçkdsflkdsajlfhaj2', text: 'PHP'},
                  {uuid: 'djdfçkdsflkdsajlfhajd3', text: 'Phyton'},
                  {uuid: 'djdfçkdsflkdsajlfha4da', text: 'C++'},
                  {uuid: 'djdfçkdsflkdsajlfha4312', text: 'All above'},
               ]
            }
         },
         {
            id: 3,
            type: 'radio',
            question: 'which framework do you love much?',
            description: 'loren fsd fdsa fsdafasd fasdfasdf sda sd',
            data: {
               options: [
                  {uuid: 'djdfçkdsflkd132sajlfhaj', text: 'Laravel'},
                  {uuid: 'djdfçkdsflkdasdsajlfhaj2', text: 'Adonis'},
                  {uuid: 'djdfçkdsfadflkdsajlfhajd3', text: 'Vue'},
                  {uuid: 'djdfçkfasddsflkdsajlfha4', text: 'React'},
                  {uuid: 'djdfçkdfadsflkdsajlfha4', text: 'Flutter'},
               ]
            }
         },
         {
            id: 4,
            type: 'checkbox',
            question: 'which your favorite ide?',
            description: 'loren fsd fdsa fsdafasd fasdfasdf sda sd',
            data: {
               options: [
                  {uuid: 'djdfçkdadfcxsflkdsajlfhaj', text: 'VS Code'},
                  {uuid: 'djdfçfdsckdsflkdsajlfhaj2', text: 'PHP Storm'},
                  {uuid: 'djdfçkdvczsflkdsajlfhajd3', text: 'ItelliJ IDEA'},
                  {uuid: 'djdfçkdsflkdfbsajlfha4', text: 'Visual Studio'},
                  {uuid: 'djdfçkdsflkbcvxgrdsajlfha4', text: 'Netbeans'},
               ]
            }
         },
         {
            id: 5,
            type: 'text',
            question: 'what your favotite youtube channel?',
            description: null,
            data: {}
         },
         {
            id: 6,
            type: 'textarea',
            question: 'which you think about PHP?',
            description: 'loren fsd fdsa fsdafasd fasdfasdf sda sd',
            data: {}
         }
      ]
   },
   {
      id: 2,
      title: 'Vue 3',
      slug: 'vue-3',
      status: 'active',
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--voT_bFmv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ts79cwjelyprmynjrc3e.png',
      image_url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--voT_bFmv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ts79cwjelyprmynjrc3e.png',
      description: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
      created_at: '2021-12-21 17:00:00',
      updated_at: '2021-12-21 17:00:00',
      expire_date: '2021-12-31 00:00:00',
      questions: []
   },
   {
      id: 3,
      title: 'Tailwind 3',
      slug: 'tailwind-3',
      status: 'active',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NIBEWFxUREx8YHCgsJBsxIBUVJDEtKDUwLjoxFx82RDMvQystMisBCgoKDg0OFRAPFi0dHR8vLjMrKzctLy0rLSsrLS0tLSs3NzcwLjI3Ky03MS01NysuMysuLTcrLS43KzcuLS0xK//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAYFB//EAEAQAAICAgECAwUEBAsJAAAAAAABAgMEEQUSIQYTMRQiQVFhB3GBkSMyUrEVNDZCgoOSorLB0iQlM1RVcnR1dv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACURAQEBAQABAwIHAQAAAAAAAAABAhEDBBIxUZEhQWGBofDxE//aAAwDAQACEQMRAD8A/JgSD0uaCQAJGgSaFGirRpoq0SwUBLRBkAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoSAaRBIJKqCUAUSQ0SSaGbRVo1aKNGbBmCzRUwAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgWINsIBIDSASCqEkElgkholEmhk0UaNmikkZuRkCzRU58AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB06ILtFTblKgEkBrqASCtAAKqSUVJRYJIaJRJsZSRm0btGbRjWRkCzRU5WAACAAAAAAAAAAAAAAAAAAAAAAAAAAAPoygZNHUZzgdOPLnTnILtFSOsqCCxBWpUAkgrQAAqSUzs4jj/abGp2149NaUrr7WlCuO9Jd2tyb9F9H8j2OP4LwLqlOjLusT2lbCymyDfy7RO2PHrXw8nqPXeHwXm7fs8GVaPpc5w92DZ0W6cZf8O1JqFi/wAn80cMoNKLaaU49UW/50dtbX02n+RLPyr0Y8md5ms3svwwkjNo9JwXhXJz8fOya/crwcd3vqhZKWQ9T1XVpab9xp9+212fw+E8ezrVXl2ea30qrol5rlrelHW9nKyNuYHVdx+RCbrnj5ELIx65VzosjZGH7bTW1H6+h9aeHxv8F4dsHlvkrM2VeQpVyWH7P1TSUJdOt6UPRt76u2ta51Xnwev+03w9RgcrfjYNFkcarHotkk7r1XuLcpSlJtpdvi9djycaZuMpqE3CGuuahJwh8up+i/EkRQHTg46lZTK6F6xXfVXfbTW5ONbnFTUHrXXpvS+ej6HifCxY5+RVxccuzFgoSgrqbPOiuiLk2nFSUdv1kl6/c2HxgbW4d8K4XTouhTZry7p02Qqs36dMmtP8CuNj2XTVdNdl1jTarqrlbNr4vUU2BmD1nC+F6ruI5rNyFkVZXGypjXU/0cfe1vzIyjv4/Q+f4b4fHvrzMzOtuqwcGNPmrGjCWTfdZJxrqq6+y/Vk236JenfanV4+GD03tXhn/lub771/teF3/uGXNcThPCr5LjLMl4zyfY8jHzPLeRj3ut2QkpVrUoOKf1TXx32dOPPAAqAAAAAAAAAAA+nCRprZyQkdEJHSV5NRWcDKSOr1M5wLYudOcgu0VMusqoJZBWpUHTx2BblWxpoj12S2/XUYx+MpP4I5jWrJshGcYTlBWdKn0txckt6i2vh39PovkanO/ia93tvt+XrJeAMno/jNPV69DjNQ6tfP8X318T5GHm5nEZM4OPTLt5lM+9dsfhJNfjpr7vmjXw34ntwpdFnXdjy9a+rc63+1Xv8Ad6fcei5XxFwuVWvPjO5x24x8m2FsfmlJa1+ej0SYs7m8r5Gt+qxu+Pz4/wCuL9J/f5+7mu8fQlXr2Lql+zO1SrT/ALPc8jn5tmTbO617nPXotRjHWlGK+CRPJ5kbrN11RopiuimmPpCG29v5ybbbf1+hyoxryXXzXv8AS+j8Xhnuxj22/r39v8fqf2aeJM2rh+crhclHjMDz8JeXW/Ktk8icm9rv7yT77M+D5m+jh+W8RLy7uWvzasOWTKqD9mq6aY7UUtL9ZfRvo3vR4/wl4pt4qd7hTRlUZdXk5WNkJuu6vvpf3pLumtSfb0128T44sw8rMtowsRYWd0q/inFPD6VBR9zt2fZ77afU9p9tcbj8byPZ17T7OfFufyVPLU50lkujj7rKsp1VwsqUk1KpuEUtPpTX/Y/XtrzOX/I3g/8A3c/35RpX9p06YXUYfE4GFi302Vzoo91u2S150pKK20uyWl6+r7a8xd4kslxWHxPkwVWHmSzI3dUuucn5nuNemv0r/I53F+i9fqubyMavGluJb3x+S46vCti/1XJ1ylBv+y4/0yPCvB04PGLw/l+7mc4+YSk/g615cJ/H+bCM1+J+WeJPFd+fycOV8uGPfW8aUIQk5xjOuXVF7evijs53x9l5vK4fKuuFNmF5SqphOUq2lOUpJt/tKTi/poxcU69JzKlx2B4U4hpwuuzKOTzIv3ZxnK9dEJr77JL+qR6TjbFDxn4hm4qahxMZOMu6klRhvT+h+VeI/Fl/I8nDk7a4QnVLGddEZScIxrkpKG337y6n/SPo1/aBfHlOQ5X2Wp2chieyTp8yfRVHoqj1Reu7/RL8ye2nXqvs68WZ/OW8jgcpZDJxb+Myb/KdNcFVJTrilDpS7as+O3uMXv58OLylvB+F+OyuN6IZXK5FvtWd5cLJx6XNRqj1Jreo679u03rb2eN8G+JLOHyLMiqmF7sxLcRxslKCUZSg+pa+PuL8zu8J+NreOxp4F+Ljclx9kut4mWvdhZ296Daeltb1p9+6097WHXtcLxJl8p4U5yzN6bLqPLo9qVcK5XQ3CSjPpSW49T9PhJfVvwvHfye5v/y+J/fcfU5T7Sbb8DK42rjsLEw8iEYVVY24LHXV1Sl2S6pN+r7fd6t/A8O87HDWTRfjRzMLNhXDKxpWSpk3GTlXZXOPeM4tv83+FkH6VzGFKrJ5zNmq1icnmeHv4OuU63DL1lUzl5Wn391Nv7jzPif+JeIP/r7f8OQfH9t8Of8ASOQ7+v8AvOP+g5+c56i7GqwMHDWFg1XPJlCV0si/IyejoVlkml6RbSS7d3+EkLXwgAbZAAAAAAAAAAB0RZrCRzpl4yNRysdkJGhywkbwkblcdZ4rOBjJHUZTiLFzpgQXkihl1lQQSQVqABBWgkgFVJOypOzUqpKtFtgqMmijRs0UaOeoMwS0QcwABAAAAAAAAAAAAAAAAAAAF0yyZmWTKzxrGRtCRzJl4yLKxY7IyLvucsJG0ZG5XG5ROJjJHSzOcSNZrAgtJFWR0lQQSQVuBABWgAgqrbJ2VBZRZlWiQVGbRVo0aKtHOwUBLIMAACAAAAAAAAAAAAAAAAAiSAEWTLJlCdlTjaMjWMjmTLxkXrFjrjIszmjI1jI11zuUTiZNG7M5ILmsmQWaKkdIgAgNQAIK0EkAqp2SV2Nl6LFWTshhFWirLsqzFggAGQABAAAAAAAAAAAAAAAAAJIAFiUyoCNVI0jI50y6kVix0qRLZgpF1I11i5JIzZrspILFCCWVI2AEBoBAKqQQC9VJJUbHRYqySAiGQWKszQABkAAAAAAAAAAAAAAAAAAAJIARJKAAsmWTJBWalMlkArKrKsANRBABGggAqgAAAAASQCgGQCAACAACAAAAAAAAAAAP/9k=',
      image_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NIBEWFxUREx8YHCgsJBsxIBUVJDEtKDUwLjoxFx82RDMvQystMisBCgoKDg0OFRAPFi0dHR8vLjMrKzctLy0rLSsrLS0tLSs3NzcwLjI3Ky03MS01NysuMysuLTcrLS43KzcuLS0xK//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIDBAYFB//EAEAQAAICAgECAwUEBAsJAAAAAAABAgMEEQUSIQYTMRQiQVFhB3GBkSMyUrEVNDZCgoOSorLB0iQlM1RVcnR1dv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACURAQEBAQABAwIHAQAAAAAAAAABAhEDBBIxUZEhQWGBofDxE//aAAwDAQACEQMRAD8A/JgSD0uaCQAJGgSaFGirRpoq0SwUBLRBkAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoSAaRBIJKqCUAUSQ0SSaGbRVo1aKNGbBmCzRUwAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgWINsIBIDSASCqEkElgkholEmhk0UaNmikkZuRkCzRU58AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB06ILtFTblKgEkBrqASCtAAKqSUVJRYJIaJRJsZSRm0btGbRjWRkCzRU5WAACAAAAAAAAAAAAAAAAAAAAAAAAAAAPoygZNHUZzgdOPLnTnILtFSOsqCCxBWpUAkgrQAAqSUzs4jj/abGp2149NaUrr7WlCuO9Jd2tyb9F9H8j2OP4LwLqlOjLusT2lbCymyDfy7RO2PHrXw8nqPXeHwXm7fs8GVaPpc5w92DZ0W6cZf8O1JqFi/wAn80cMoNKLaaU49UW/50dtbX02n+RLPyr0Y8md5ms3svwwkjNo9JwXhXJz8fOya/crwcd3vqhZKWQ9T1XVpab9xp9+212fw+E8ezrVXl2ea30qrol5rlrelHW9nKyNuYHVdx+RCbrnj5ELIx65VzosjZGH7bTW1H6+h9aeHxv8F4dsHlvkrM2VeQpVyWH7P1TSUJdOt6UPRt76u2ta51Xnwev+03w9RgcrfjYNFkcarHotkk7r1XuLcpSlJtpdvi9djycaZuMpqE3CGuuahJwh8up+i/EkRQHTg46lZTK6F6xXfVXfbTW5ONbnFTUHrXXpvS+ej6HifCxY5+RVxccuzFgoSgrqbPOiuiLk2nFSUdv1kl6/c2HxgbW4d8K4XTouhTZry7p02Qqs36dMmtP8CuNj2XTVdNdl1jTarqrlbNr4vUU2BmD1nC+F6ruI5rNyFkVZXGypjXU/0cfe1vzIyjv4/Q+f4b4fHvrzMzOtuqwcGNPmrGjCWTfdZJxrqq6+y/Vk236JenfanV4+GD03tXhn/lub771/teF3/uGXNcThPCr5LjLMl4zyfY8jHzPLeRj3ut2QkpVrUoOKf1TXx32dOPPAAqAAAAAAAAAAA+nCRprZyQkdEJHSV5NRWcDKSOr1M5wLYudOcgu0VMusqoJZBWpUHTx2BblWxpoj12S2/XUYx+MpP4I5jWrJshGcYTlBWdKn0txckt6i2vh39PovkanO/ia93tvt+XrJeAMno/jNPV69DjNQ6tfP8X318T5GHm5nEZM4OPTLt5lM+9dsfhJNfjpr7vmjXw34ntwpdFnXdjy9a+rc63+1Xv8Ad6fcei5XxFwuVWvPjO5x24x8m2FsfmlJa1+ej0SYs7m8r5Gt+qxu+Pz4/wCuL9J/f5+7mu8fQlXr2Lql+zO1SrT/ALPc8jn5tmTbO617nPXotRjHWlGK+CRPJ5kbrN11RopiuimmPpCG29v5ybbbf1+hyoxryXXzXv8AS+j8Xhnuxj22/r39v8fqf2aeJM2rh+crhclHjMDz8JeXW/Ktk8icm9rv7yT77M+D5m+jh+W8RLy7uWvzasOWTKqD9mq6aY7UUtL9ZfRvo3vR4/wl4pt4qd7hTRlUZdXk5WNkJuu6vvpf3pLumtSfb0128T44sw8rMtowsRYWd0q/inFPD6VBR9zt2fZ77afU9p9tcbj8byPZ17T7OfFufyVPLU50lkujj7rKsp1VwsqUk1KpuEUtPpTX/Y/XtrzOX/I3g/8A3c/35RpX9p06YXUYfE4GFi302Vzoo91u2S150pKK20uyWl6+r7a8xd4kslxWHxPkwVWHmSzI3dUuucn5nuNemv0r/I53F+i9fqubyMavGluJb3x+S46vCti/1XJ1ylBv+y4/0yPCvB04PGLw/l+7mc4+YSk/g615cJ/H+bCM1+J+WeJPFd+fycOV8uGPfW8aUIQk5xjOuXVF7evijs53x9l5vK4fKuuFNmF5SqphOUq2lOUpJt/tKTi/poxcU69JzKlx2B4U4hpwuuzKOTzIv3ZxnK9dEJr77JL+qR6TjbFDxn4hm4qahxMZOMu6klRhvT+h+VeI/Fl/I8nDk7a4QnVLGddEZScIxrkpKG337y6n/SPo1/aBfHlOQ5X2Wp2chieyTp8yfRVHoqj1Reu7/RL8ye2nXqvs68WZ/OW8jgcpZDJxb+Myb/KdNcFVJTrilDpS7as+O3uMXv58OLylvB+F+OyuN6IZXK5FvtWd5cLJx6XNRqj1Jreo679u03rb2eN8G+JLOHyLMiqmF7sxLcRxslKCUZSg+pa+PuL8zu8J+NreOxp4F+Ljclx9kut4mWvdhZ296Daeltb1p9+6097WHXtcLxJl8p4U5yzN6bLqPLo9qVcK5XQ3CSjPpSW49T9PhJfVvwvHfye5v/y+J/fcfU5T7Sbb8DK42rjsLEw8iEYVVY24LHXV1Sl2S6pN+r7fd6t/A8O87HDWTRfjRzMLNhXDKxpWSpk3GTlXZXOPeM4tv83+FkH6VzGFKrJ5zNmq1icnmeHv4OuU63DL1lUzl5Wn391Nv7jzPif+JeIP/r7f8OQfH9t8Of8ASOQ7+v8AvOP+g5+c56i7GqwMHDWFg1XPJlCV0si/IyejoVlkml6RbSS7d3+EkLXwgAbZAAAAAAAAAAB0RZrCRzpl4yNRysdkJGhywkbwkblcdZ4rOBjJHUZTiLFzpgQXkihl1lQQSQVqABBWgkgFVJOypOzUqpKtFtgqMmijRs0UaOeoMwS0QcwABAAAAAAAAAAAAAAAAAAAF0yyZmWTKzxrGRtCRzJl4yLKxY7IyLvucsJG0ZG5XG5ROJjJHSzOcSNZrAgtJFWR0lQQSQVuBABWgAgqrbJ2VBZRZlWiQVGbRVo0aKtHOwUBLIMAACAAAAAAAAAAAAAAAAAiSAEWTLJlCdlTjaMjWMjmTLxkXrFjrjIszmjI1jI11zuUTiZNG7M5ILmsmQWaKkdIgAgNQAIK0EkAqp2SV2Nl6LFWTshhFWirLsqzFggAGQABAAAAAAAAAAAAAAAAAJIAFiUyoCNVI0jI50y6kVix0qRLZgpF1I11i5JIzZrspILFCCWVI2AEBoBAKqQQC9VJJUbHRYqySAiGQWKszQABkAAAAAAAAAAAAAAAAAAAJIARJKAAsmWTJBWalMlkArKrKsANRBABGggAqgAAAAASQCgGQCAACAACAAAAAAAAAAAP/9k=',
      description: 'A utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.',
      created_at: '2021-12-21 14:00:00',
      updated_at: '2021-12-21 14:00:00',
      expire_date: '2021-12-31 00:00:00',
      questions: []
   },
]

export default {
   surveys: [...tmpSurveys],
   questionTypes: ['text', 'select', 'radio', 'checkbox', 'textarea']
}
