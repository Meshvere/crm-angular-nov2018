'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">crm documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-AppModule-ae6f05fdead9b42a568f78c239854efc"' : 'data-target="#xs-components-links-module-AppModule-ae6f05fdead9b42a568f78c239854efc"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-AppModule-ae6f05fdead9b42a568f78c239854efc"' : 'id="xs-components-links-module-AppModule-ae6f05fdead9b42a568f78c239854efc"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ClientsModule.html" data-type="entity-link">ClientsModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-ClientsModule-9d72256224feffdf018f77d54974a6fb"' : 'data-target="#xs-components-links-module-ClientsModule-9d72256224feffdf018f77d54974a6fb"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-ClientsModule-9d72256224feffdf018f77d54974a6fb"' : 'id="xs-components-links-module-ClientsModule-9d72256224feffdf018f77d54974a6fb"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddClientComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ClientFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientFormComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListClientsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddClientComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PageClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageClientsComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/ClientsRoutingModule.html" data-type="entity-link">ClientsRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"' : 'data-target="#xs-components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"' : 'id="xs-components-links-module-LoginModule-ac83d10cb74a913fc038493440ffcd55"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/PageLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageLoginComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-PageNotFoundModule-af88008cecc09a7b7ccd2348e285111e"' : 'data-target="#xs-components-links-module-PageNotFoundModule-af88008cecc09a7b7ccd2348e285111e"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-PageNotFoundModule-af88008cecc09a7b7ccd2348e285111e"' : 'id="xs-components-links-module-PageNotFoundModule-af88008cecc09a7b7ccd2348e285111e"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link">PageNotFoundRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PrestationsModule.html" data-type="entity-link">PrestationsModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-PrestationsModule-d62ecf93367af79d937fdf9860c422fc"' : 'data-target="#xs-components-links-module-PrestationsModule-d62ecf93367af79d937fdf9860c422fc"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-PrestationsModule-d62ecf93367af79d937fdf9860c422fc"' : 'id="xs-components-links-module-PrestationsModule-d62ecf93367af79d937fdf9860c422fc"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AddPrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPrestationComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/FormPrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormPrestationComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ListPrestationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPrestationsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PageAddPrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageAddPrestationComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PagePrestationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagePrestationsComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/PrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestationComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/ReactiveFormPrestationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReactiveFormPrestationComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/PrestationsRoutingModule.html" data-type="entity-link">PrestationsRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"' : 'data-target="#xs-components-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"' : 'id="xs-components-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AddRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddRowComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/TableauComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableauComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#directives-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"' : 'data-target="#xs-directives-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"') + '>\n                                    <span class="icon ion-md-code-working"></span>\n                                    <span>Directives</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="directives-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"' : 'id="xs-directives-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="directives/ActifDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActifDirective</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StateDirective</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#pipes-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"' : 'data-target="#xs-pipes-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"') + '>\n                                    <span class="icon ion-md-add"></span>\n                                    <span>Pipes</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="pipes-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"' : 'id="xs-pipes-links-module-SharedModule-41cb1d3a8334e4d8ffca9a4ee2947667"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TotalPipe</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/TemplatesModule.html" data-type="entity-link">TemplatesModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-TemplatesModule-849232f4741bb3dfca71075d4eb749c7"' : 'data-target="#xs-components-links-module-TemplatesModule-849232f4741bb3dfca71075d4eb749c7"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-TemplatesModule-849232f4741bb3dfca71075d4eb749c7"' : 'id="xs-components-links-module-TemplatesModule-849232f4741bb3dfca71075d4eb749c7"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/TemplateAComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateAComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/TemplateBComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateBComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-UiModule-4a418dfcc2006299be46db6c0929b692"' : 'data-target="#xs-components-links-module-UiModule-4a418dfcc2006299be46db6c0929b692"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-UiModule-4a418dfcc2006299be46db6c0929b692"' : 'id="xs-components-links-module-UiModule-4a418dfcc2006299be46db6c0929b692"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/Client.html" data-type="entity-link">Client</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Prestation.html" data-type="entity-link">Prestation</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/ClientsService.html" data-type="entity-link">ClientsService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/PrestationsService.html" data-type="entity-link">PrestationsService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/ClientI.html" data-type="entity-link">ClientI</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/PrestationsI.html" data-type="entity-link">PrestationsI</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                    <li class="link">\n                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                    </li>\n                \n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));