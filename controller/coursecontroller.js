
const courseModel=require("../model/coursemodel")


const addcourse = async (req, res) => {
    const data = await courseModel.create(req.body);
    return res.send(data);
};

const getcourse = async (req, res) => {
    try {
        const coursedata = await courseModel.find()
        return res.send(coursedata);
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching course" });
    }
};

const deletecourse = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await courseModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send({ message: "course not found" });
        }
        return res.send({ message: "course deleted successfully", data });
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while deleting the course" });
    }
};

const getcoursebyid = async (req, res) => {
    const { id } = req.params; 
    try {
        const course = await courseModel.findById(id);
        if (!course) {
            return res.status(404).send({ message: "course not found" });
        }
        return res.status(200).send(course);
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching the course" });
    }
};

module.exports={
    addcourse,getcourse,deletecourse,getcoursebyid
}