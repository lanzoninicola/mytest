// for (var i = 0; i < 5; i++) {
//     const f = () => {
//         var addendum = 5
//         const f2 = () => {
//             return i + addendum
//         }
//         f2()
//     }

//     f()
// }

for (let i = 0; i < 5; i++) {
    const f = () => {
        let addendum = 5
        const f2 = () => {
            return i + addendum
        }

        f2()
    }
    f()
}