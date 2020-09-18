#!/bin/sh

psql -h localhost -d civ -U postgres -f backend/game-data.sql
