#!/bin/sh

gatsby build &&
surge public/ -d pwa.dailydrip.com
