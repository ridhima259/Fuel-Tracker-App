const initialState = {
    personalCount: 0,
    monthData : [
        {
          month: "SEPTEMBER 2021",
          cost: "$57.00",
        },
        {
          month: "JULY 2021",
          cost: "$52.38",
        },
      ],
      timelineData : [
        {
          month: "SEPTEMBER 2021",
          date: "Friday, 24",
          miles: "66,783 mi",
          cost: "$57.00",
        },
        {
          month: "JULY 2021",
          date: "Saturday, 17",
          miles: "66,506 mi",
          cost: "$52.38",
        },
        {
          month: "MAY 2021",
          date: "Saturday, 22",
          miles: "66,000 mi",
          cost: "$55.01",
        },
      ],
  };
  
  const rootReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
      }
  };
  
  export default rootReducer;