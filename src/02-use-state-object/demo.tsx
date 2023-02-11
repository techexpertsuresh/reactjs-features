import React from "react";
/*
interface UserInfo {
  name: string;
  lastname: string;
}

export const MyComponent: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    name: "John",
    lastname: "Doe",
  });
  return (
    <>
      <h4>
        {userInfo.name} {userInfo.lastname}
      </h4>
      <input
        value={userInfo.name}
        onChange={(e) =>
          setUserInfo({
            ...userInfo,
            name: e.target.value,
          })
        }
      />
      <input
        value={userInfo.lastname}
        onChange={(e) =>
          setUserInfo({
            ...userInfo,
            lastname: e.target.value,
          })
        }
      />
    </>
  );
};
*/
interface EmployeeInfo {
  empName: string;
  empId: string;
}

export const MyComponent: React.FC = () => {
  const [employeeInfo, setEmployeeInfo] = React.useState<EmployeeInfo>({
    empName: "Suresh",
    empId: "51928226",
  });
  return (
    <>
      <h4>Employee Name : {employeeInfo.empName}, Employee Id : {employeeInfo.empId}</h4>
      <input type="text" value={employeeInfo.empName} onChange={(e)=>setEmployeeInfo({...employeeInfo, empName:e.target.value})}></input>
      <input type="text" value={employeeInfo.empId} onChange={(e)=>setEmployeeInfo({...employeeInfo, empId:e.target.value})}></input>
    </>
  );
};
