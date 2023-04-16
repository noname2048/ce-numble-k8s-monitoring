FROM python:3.10.9-bullseye As bullseye
# set locale
RUN apt-get update && \
    apt-get install -y \
    locales locales-all && \
    locale-gen ko_KR.UTF-8
ENV LC_ALL=ko_KR.UTF-8 \
    TZ=Asia/Seoul
# non root user
ARG USERNAME=fastapi
ARG USER_UID=1000
ARG USER_GID=${USER_UID}
RUN useradd ${USERNAME} --uid ${USER_UID} --create-home --shell /bin/bash 

FROM bullseye as poetry
USER ${USERNAME}
ENV PYTHTONBUFFERED=1 \
    POETRY_HOME="/home/$USERNAME/.poetry" \
    # POETRY_VIRTUALENVS_IN_PROJECT=true \
    POETRY_VIRTUALENVS_CREATE=false \
    POETRY_NO_INTERACTION=1
RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="$POETRY_HOME/bin:$PATH"

FROM poetry as venv
ENV VIRTUAL_ENV=$HOME/.venv \
    PATH="$VIRTUAL_ENV/bin:$PATH"
ADD .venv ${VIRTUAL_ENV}
WORKDIR /app
COPY ./poetry.* pyproject.toml /app/
RUN poetry install

FROM venv
COPY ./ /app
EXPOSE 8080
CMD uvicorn main:app --port 8080
