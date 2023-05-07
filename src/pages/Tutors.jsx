import TeachersItem from "../components/TeachersItem/TeachersItem";

import { tutors } from "../helpers/teachersList";

const Tutors = () => {
    return (
        <section className="teachers">
            <div className="container">
                <div className="teachers__body">

                    {tutors.map((tutor, index) => {
                        return (
                            <TeachersItem
                                key={index}
                                name={tutor.name}
                                position={tutor.position}
                                information={tutor.information}
                                phone={tutor.phone}
                                img={tutor.img}
                                index={index}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Tutors;
