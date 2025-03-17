const lessonModel=require("../model/lessonmodel")


const addlesson = async (req, res) => {
    const data = await lessonModel.create(req.body);
    return res.send(data);
};

const getlesson = async (req, res) => {

    try {
        const {courseId}=req.query 
        const query=courseId ? {courseId} : {}

        const lessonedata = await lessonModel.find(query).populate("courseId")
        return res.send(lessonedata);

    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching lesson" });
    }
};

const deletelesson = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await lessonModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send({ message: "lesson not found" });
        }
        return res.send({ message: "lesson deleted successfully", data });
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while deleting the lesson" });
    }
};

const getlessonbyId = async (req, res) => {
    const { id } = req.params; 
    try {
        const lesson = await lessonModel.findById(id).populate("courseId")
        if (!lesson) {
            return res.status(404).send({ message: "lesson not found" });
        }
        return res.status(200).send(lesson);
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching the lesson" });
    }
};

module.exports={
    addlesson,getlesson,deletelesson,getlessonbyId
}