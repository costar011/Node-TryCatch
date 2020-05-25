import express from "express";

const PORT = 3435;
const app = express();

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);

  const students = new Array();

  students.push("라이언");
  students.push("어피치");
  students.push("튜브");
  students.push("콘");
  students.push("무지");

  console.log(`배열 students는 ${students}`);
  console.log(`배열 students 길이는 ${students.length}`);

  // forEach ?
  // 배열안에 존재하는 데이터를 순차적으로 하나씩 추출하여 반복한다.
  students.forEach((students) => {
    console.log(`${students}님 환영합니다.`);
  });

  try {
    console.log(num);
  } catch (error) {
    console.log(error);
  }
  console.log("에러난 뒤에 나를 출력해봐");
});
