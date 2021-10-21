import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerson } from "../redux/actions/randomPersonActions";

const RandomPerson = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.randomPerson);

  return (
    <div>
      <button onClick={() => dispatch(getPerson())}>Get Random Person</button>
      <div>{person && person.name.first}</div>
      <div>{person && person.name.last}</div>
      <div>{person && person.email}</div>
    </div>
  );
};

export default RandomPerson;
