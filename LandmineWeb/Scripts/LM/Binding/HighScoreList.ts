﻿/// <reference path="../../knockout.d.ts" />
/// <reference path="HighScore.ts" />
module LM {
    export module Binding {

        export class HighScoreList {

            public scores: KnockoutObservableArray<HighScore>;
            public sortedScores: KnockoutComputed<HighScore[]>;
            public loading: KnockoutObservable<boolean>;

            constructor(scores: Score[]) {
                this.scores = ko.observableArray(
                    scores.map((s) => new HighScore(s, false)));

                this.sortedScores = ko.computed(() =>
                    this.scores().sort((left, right) =>
                        right.Value() - left.Value()));

                this.loading = ko.observable(true);
            }
        }
    }
} 