#!/bin/bash


API_URL="https://admin-api.dev.lawtalksoda.com" DOCKER_IMAGE=lawtalksodaadmin DOCKER_IMAGE_TAG=latest ./build.sh
docker rmi -f $(docker images -f "dangling=true" -q) || true