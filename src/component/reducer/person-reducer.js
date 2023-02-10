export default function personReducer(person, action){
    switch(action.type){
        case 'updated':{
            const {prev, current} = action;
            return {
                ...person,
                mentor: person.mentor.map((mentor) => {
                  if (mentor.name === prev) {
                    return { ...mentor, name: current };
                }
                    return mentor;
                })
            }
        }
        case 'added':{
            const {name, title} = action;
            return {
                ...person,
                mentor: [...person.mentor, { name, title }],
            }
        }
        case 'deleted':{
           return {
                ...person,
                mentor: person.mentor.filter((mentor) => mentor.name !== action.name),
              }
        }
        default:{
            throw Error(`알수없는 액션: ${action.type}`)
        }
    }
}