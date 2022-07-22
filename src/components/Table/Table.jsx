import MaterialTable from "material-table";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../reducers/cars/cars.selector";
import { getCarsStart } from "../../reducers/cars/cars.actions";

import { useEffect } from "react";

export default function Table() {
  const columns = [
    { title: "Make", field: "make" },
    { title: "Model", field: "model" },
    { title: "Year", field: "year", type: "numeric" },
    {
      title: "Engine Type",
      field: "engineType",
      lookup: {
        DIESEL: "DIESEL",
        HYBRID: "HYBRID",
        ELECTRIC: "ELECTRIC",
        GASOLINE: "GASOLINE",
      },
    },
    {
      title: "Gear Box",
      field: "gearBox",
      lookup: { AUTOMATIC: "AUTOMATIC", MANUAL: "MANUAL" },
    },
    {
      title: "Condition",
      field: "condition",
      lookup: { NEW: "NEW", USED: "USED", PARTS: "PARTS" },
    },
    { title: "Horse Power", field: "horsePower", type: "numeric" },
    { title: "Color", field: "color" },
    { title: "Price $", field: "price", type: "numeric" },
    { title: "City", field: "city" },
    { title: "Mileage", field: "mileage", type: "numeric" },
    { title: "Extras", field: "extras" },
  ];

  // const currentUser = useSelector(selectCurrentUser);
  const cars = useSelector(selectCars);
  // const [cars, setCars] = useState([]);

  const dispatch = useDispatch();

  // let userInfo;
  // let token;

  // if (currentUser.user) {
  //   userInfo = currentUser.user;
  //   token = currentUser.jwtToken;
  // }

  useEffect(() => {
    dispatch(getCarsStart());
  }, []);

  return (
    <div>
      <MaterialTable
        title="Simple Cars"
        columns={columns}
        data={cars}
        options={{
          actionsColumnIndex: -1,
        }}
        // actions={[
        //   (rowData) => ({
        //     icon: "delete",
        //     disabled: rowData.user.id !== userInfo.id,
        //   }),
        // ]}
        // editable={{
        //   onRowAdd: userInfo
        //     ? (newData) =>
        //         new Promise((resolve, reject) => {
        //           const requestData = {
        //             ...newData,
        //             user: userInfo,
        //           };
        //           console.log(requestData);
        //           dispatch(postCarsAsync(requestData, token, cars));
        //           resolve();
        //         })
        //     : null,
        //   onRowDelete: userInfo
        //     ? (oldData) =>
        //         new Promise((resolve, reject) => {
        //           dispatch(
        //             deleteCarsAsync(oldData.id, userInfo.id, token, cars)
        //           );
        //           resolve();
        //         })
        //     : null,

        //   onRowUpdate: currentUser.user
        //     ? (newData, oldData) =>
        //         new Promise((resolve, reject) => {
        //           dispatch(updateCarsAsync(newData, userInfo.id, token, cars));
        //           resolve();
        //         })
        //     : null,
        // }}
      />
    </div>
  );
}
