FROM python:3.10.9-bullseye As poetry
ENV PYTHTONBUFFERED=1 \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_CREATE=false \
    POETRY_NO_INTERACTION=1
RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="$POETRY_HOME/bin:$PATH"

FROM poetry as venv
WORKDIR /app
COPY ./poetry.* pyproject.toml /app/
RUN poetry install

FROM venv
COPY ./ /app
EXPOSE 8080
ENTRYPOINT uvicorn main:app --host 0.0.0.0 --port 8080
