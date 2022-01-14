import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Container,
  TextField,
  Button,
} from "@mui/material";
import PostsAPI from "../../api/PostsAPI";
import Loading from "../UI/Loading";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import {
  resetFormValues,
  setFormValues,
} from "../../store/actionCreators/form";
import { IFormState } from "../../utils/types";

const PostCreateForm = () => {
  const [values, setValues] = useState<IFormState>({
    description: "",
    media: "",
    mediaData: undefined,
  });
  const [validationProps, setValidationProps] = useState({
    description: {
      error: false,
      helperText: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [newPost, setNewPost] = useState<{ isCreated: boolean; id: number }>({
    isCreated: false,
    id: 0,
  });
  const form = useTypedSelector((state) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    if (form) setValues({ ...form });
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) dispatch(setFormValues(values));
  }, [values]);

  useEffect(() => {
    dispatch(resetFormValues());
  }, [newPost]);

  function validateForm() {
    let isFormValid: boolean;
    if (!values.description) {
      setValidationProps({
        description: {
          error: true,
          helperText: "Поле обязательное для заполнения",
        },
      });
      isFormValid = false;
    } else {
      resetValidationProps();
      isFormValid = true;
    }
    return isFormValid;
  }

  function resetValidationProps() {
    setValidationProps({
      description: { error: false, helperText: "" },
    });
  }

  function createFact() {
    if (validateForm()) {
      setIsLoading(true);
      PostsAPI.create({ ...values, media: values.mediaData, id: 0 }).then(
        (response) => {
          setNewPost({ isCreated: true, id: response.id });
        }
      );
    }
  }

  function onMediaChange(files: FileList | null) {
    if (!files) {
      setValues({ ...values, media: "", mediaData: undefined });
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setValues({
          ...values,
          media: files[0].name,
          mediaData: reader.result as string,
        });
      };
    }
  }

  function onDescriptionChange(e: string) {
    setValues({ ...values, description: e });
  }

  return newPost.isCreated ? (
    <Navigate replace to="/posts" />
  ) : (
    <Container maxWidth="lg">
      {isLoading ? (
        <Loading loadingText={"Сохранение факта..."} />
      ) : (
        <Card sx={{ mt: 3 }}>
          <CardHeader title="Добавление нового факта" />
          <CardContent>
            <Box component="form" sx={{ m: 1, maxWidth: "100%" }}>
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
                  onChange={(e) => onDescriptionChange(e.target.value)}
                />
                {values.media ? (
                  <p>
                    {values.media}
                    <strong
                      style={{
                        cursor: "pointer",
                        marginLeft: "10px",
                        color: "red",
                      }}
                      title={"Удалить файл"}
                      onClick={(e) => setValues({ ...values, media: "" })}
                    >
                      X
                    </strong>
                  </p>
                ) : (
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => onMediaChange(e.target.files)}
                  />
                )}
              </div>
              <Box
                sx={{
                  marginTop: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button variant="outlined" onClick={createFact}>
                  Сохранить
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default PostCreateForm;
