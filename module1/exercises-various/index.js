/*
//Use destructuring to simplify this ES5 code:

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  const title = profile.title;
  const department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
isEngineer(profile)

//My solution:
const title = `engineer`
const department = `Engineering`
const profile = {
    title, department
}
const isEngineer = (profile)=>{
    const {title, department} = profile
    return title === 'Engineer' && department === 'Engineering'
}

//Which was very far from the solution:
const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
  const isEngineer = ({title, department}) => title === 'Engineer' && department === 'Engineering';


*/