import TeachersItem from "../components/TeachersItem/TeachersItem";

import { teachers } from "../helpers/teachersList";

const Teachers = () => {
    return (
        <section className="teachers">
            <div className="container">
                <div className="teachers__body">

                    {teachers.map((teacher, index) => {
                        return (
                            <TeachersItem
                                key={index}
                                name={teacher.name}
                                position={teacher.position}
                                information={teacher.information}
                                phone={teacher.phone}
                                img={teacher.img}
                                index={index}
                            />
                        )
                    })}


                </div>
            </div>
        </section>
    );
}

export default Teachers;
