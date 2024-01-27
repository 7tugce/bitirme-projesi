import React from "react";
import { Select } from "antd";
import { useNavigate } from "react-router";

const SelectTeacher = () => {
  let navigate = useNavigate();
  const handleChange = (value) => {
    console.log("selected :", value);
    navigate("/make-appointment");
  };
  return (
    <>
    <p>Randevu Almak İstediğiniz Öğretmeni Seçiniz</p>
      {" "}
      <Select
        showSearch
        style={{
          width: 200,
        }}
        onChange={handleChange}
        placeholder="Öğretmen Ara"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Murat Aydoğan",
          },
          {
            value: "2",
            label: "Engin Avcı",
          },
          {
            value: "3",
            label: "Bihter Daş",
          },
          {
            value: "4",
            label: "Özal Yıldırım",
          },
          {
            value: "5",
            label: "İbrahim Türkoğlu",
          },
        ]}
      />
    </>
  );
};

export default SelectTeacher;
