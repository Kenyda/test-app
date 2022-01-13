import React, {useState} from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Container,
    TextField,
    FormControl,
    Button,
    CircularProgress, Typography
} from "@mui/material";
import PostsAPI from "../../api/PostsAPI";
import Loading from "../UI/Loading";
import {Navigate} from "react-router-dom";

const PostCreateForm = () => {
    const [values, setValues] = useState({
        description: '',
        media: '',
    })
    const [validationProps, setValidationProps] = useState({
        description: {
            error: false,
            helperText: '',
        }
    })
    const [isLoading, setIsLoading] = useState(false);
    const [newPost, setNewPost] = useState<{isCreated: boolean, id: number}>({
        isCreated: false,
        id: 0,
    });

    function validateForm() {
        let isFormValid: boolean;
        if (!values.description) {
            setValidationProps({description: {error: true, helperText: 'Поле обязательное для заполнения'}});
            isFormValid = false;
        }
        else {
            resetValidationProps();
            isFormValid = true;
        };
        return isFormValid
    }

    function resetValidationProps() {
        setValidationProps({
            description: {error: false, helperText: ''}
        })
    }

    function createFact() {
        if (validateForm()) {
            setIsLoading(true)
            PostsAPI.create({...values, id: 0}).then((response) => {
                setNewPost({isCreated: true, id: response.id})
            })
        }
    }

    function onFileLoad(e: string) {
        const splitPath = e.split('\\');
        setValues({...values, media: splitPath[splitPath.length - 1]})
    }


    return (
        newPost.isCreated
            ? <Navigate replace to={`/posts/${newPost.id}`} />
            : <Container maxWidth="lg">
                {isLoading
                    ? <Loading loadingText={"Сохранение факта..."}/>
                    : <Card sx={{mt: 3}}>
                        <CardHeader title="Добавление нового факта"/>
                        <CardContent>
                            <Box
                                component="form"
                                sx={{m: 1, maxWidth: '100%'}}
                            >
                                <div>
                                    <TextField
                                        error={validationProps.description.error}
                                        helperText={validationProps.description.helperText}
                                        fullWidth
                                        required
                                        id="outlined-required"
                                        label="Ваш текст"
                                        multiline
                                        value={values.description}
                                        onChange={e => setValues({...values, description: e.target.value})}
                                    />
                                    <input type="file"
                                        onChange={e => onFileLoad(e.target.value)}
                                    />
                                </div>
                                <Box sx={{
                                    marginTop: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Button variant="outlined"
                                            onClick={createFact}>Сохранить</Button>
                                </Box>

                            </Box>
                        </CardContent>
                    </Card>
                }
            </Container>

    );
};

export default PostCreateForm;