<template>
  <div>
    <div
      id="element-to-print"
      ref="document"
      class="d-none"
      style="
        font-family: 'Questrial', sans-serif;
        font-weight: 200;
        font-size: 18px;
      "
    >
      <table width="100%" style="font-weight: 400">
        <tr>
          <td
            width="40%"
            align="center "
            style="text-align: center; font-size: 13px; font-weight: bold"
          >
            <center>FRIEND OF THE COURT</center>
            <center>Renae Topolewski</center>
          </td>
          <td align="center">
            <img
              src="https://www.stclaircounty.org/pagebuilder/scc/custom4/Pdfs/michi.png"
              style="height: 80px; width: 70px"
            />
          </td>
          <td
            width="40%"
            align="center"
            style="text-align: center; font-size: 13px; font-weight: bold"
          >
            <center>ASSISTANT FRIEND OF THE COURT</center>
            <center>Caryn VanderHeuvel</center>
          </td>
        </tr>
      </table>

      <table width="100%" style="line-height: 1">
        <tr>
          <td width="100%" align="center">
            <div
              style="
                text-align: center;
                font-weight: bold;
                font-family: DM Serif Display, serif;
              "
            >
              ST. CLAIR COUNTY FRIEND OF THE COURT
            </div>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            31st Judicial Circuit
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            201 McMorran Blvd., Room 1600
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            Port Huron, Michigan 48060
          </td>
        </tr>

        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            Phone (810) 985-2285
          </td>
        </tr>

        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            www.stclaircounty.org/offices/foc
          </td>
        </tr>
      </table>

      <table width="100%" style="font-size: small">
        <tr>
          <td width="100%">&nbsp;</td>
        </tr>
      </table>

      <center>
        <div style="font-size: 18px; text-align: center">
          Agreement to Provide Primary Health Insurance for Children
        </div>
      </center>

      <table width="100%" style="font-size: small">
        <tr>
          <td width="100%">&nbsp;</td>
        </tr>
      </table>

      <table width="100%">
        <tr>
          <td>Support Order No: {supportOrderNumber}</td>
        </tr>
      </table>

      <br />

      <table width="100%" style="font-size: 16px">
        <tr>
          <td>Plaintiff: &nbsp;{plaintiff}</td>
        </tr>
        <tr>
          <td width="40%">
            <div style="display: flex">
              <div>Signature:</div>
              &nbsp;
              <div style="border-bottom: 1px solid black; min-width: 200px">
                {plaintiffSignature}
              </div>
            </div>
          </td>

          <td width="40%">
            <div style="display: flex">
              <div>Date:</div>
              &nbsp;
              <div
                style="border-bottom: 1px solid black; min-width: 120px"
              ></div>
            </div>
          </td>
          <td></td>
        </tr>
      </table>

      <br />

      <table width="100%" style="font-size: 16px">
        <tr>
          <td>Defendant: <span width="35%">&nbsp;{defendant}</span></td>
        </tr>

        <tr>
          <td width="40%">
            <div style="display: flex">
              <div>Signature:</div>
              &nbsp;
              <div style="border-bottom: 1px solid black; min-width: 200px">
                {defendantSignature}
              </div>
            </div>
          </td>

          <td width="40%">
            <div style="display: flex">
              <div>Date:</div>
              &nbsp;
              <div
                style="border-bottom: 1px solid black; min-width: 120px"
              ></div>
            </div>
          </td>
          <td></td>
        </tr>
      </table>

      <br />

      <table>
        <tr>
          <td width="100% " style="font-size: 16px; line-height: 1">
            The parties named above are in agreement that &nbsp;<span
              style="border-bottom: 1px solid black; min-width: 100px"
              >&nbsp;{inAgreementThat}&nbsp;</span
            >&nbsp; shall provide the Primary Health insurance for the children,
            namely: &nbsp;<span
              style="border-bottom: 1px solid black; min-width: 100px"
              >&nbsp;{children}&nbsp;</span
            >. Parties have agreed that an Order for Primary Insurance be
            entered for &nbsp;<span
              style="border-bottom: 1px solid black; min-width: 100px"
              >&nbsp;{partiesOrderPrimary}&nbsp;</span
            >. The insurance currently provided is listed below. The insurance
            intended to be secondary insurance is listed on a separate page.
          </td>
        </tr>
      </table>

      <table width="100%" style="font-size: small">
        <tr>
          <td width="100%">&nbsp;</td>
        </tr>
      </table>

      <center>
        <div style="font-size: 16px; font-weight: 900">
          <span style="border-bottom: 1px solid black">PRIMARY</span>
        </div>
      </center>

      <table width="100%" style="font-size: small">
        <tr>
          <td width="100%">&nbsp;</td>
        </tr>
      </table>

      <table width="100%" style="border-collapse: collapse; line-height: 1">
        <tr>
          <td width="48%" style="border: 1px solid black">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table width="100%" style="border-collapse: collapse">
        <tr>
          <td width="48%" style="border: 1px solid black; border-top: none">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table width="100%" style="border-collapse: collapse">
        <tr>
          <td width="48%" style="border: 1px solid black; border-top: none">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table width="100%" style="border-collapse: collapse">
        <tr>
          <td width="48%" style="border: 1px solid black; border-top: none">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <div style="page-break-before: always">&nbsp;</div>

      <table id="headerx" width="100%" style="font-weight: 400">
        <tr>
          <td
            width="40%"
            align="center "
            style="text-align: center; font-size: 13px; font-weight: bold"
          >
            <center>FRIEND OF THE COURT</center>
            <center>Renae Topolewski</center>
          </td>
          <td align="center">
            <img
              src="https://www.stclaircounty.org/pagebuilder/scc/custom4/Pdfs/michi.png"
              style="height: 80px; width: 70px"
            />
          </td>
          <td
            width="40%"
            align="center"
            style="text-align: center; font-size: 13px; font-weight: bold"
          >
            <center>ASSISTANT FRIEND OF THE COURT</center>
            <center>Caryn VanderHeuvel</center>
          </td>
        </tr>
      </table>

      <table width="100%">
        <tr>
          <td width="100%" align="center">
            <div
              style="
                text-align: center;
                font-weight: bold;
                font-family: DM Serif Display, serif;
              "
            >
              ST. CLAIR COUNTY FRIEND OF THE COURT
            </div>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            31st Judicial Circuit
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            201 McMorran Blvd., Room 1600
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            Port Huron, Michigan 48060
          </td>
        </tr>

        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            Phone (810) 985-2285
          </td>
        </tr>

        <tr>
          <td
            width="100%"
            align="center"
            style="text-align: center; font-size: 14px"
          >
            www.stclaircounty.org/offices/foc
          </td>
        </tr>
      </table>
      <br />
      <center>
        <div style="font-weight: 100; font-size: 18px; text-align: center">
          HEALTH INSURANCE INFORMATION
        </div>
      </center>

      <br />

      <table width="100%">
        <tr>
          <td style="font-weight: 900; font-size: 16px">
            <i
              >Please verify intended
              <span style="border-bottom: 1px solid black">SECONDARY</span>
              health insurance information for
              <span style="border-bottom: 1px solid black">children</span> on
              this case.
            </i>
          </td>
        </tr>
      </table>

      <br />

      <table width="100%">
        <tr>
          <td>
            <div style="display: flex">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp; &#x2610; &nbsp;&nbsp; Court Docket No.:
              </div>
              &nbsp;
              <div style="border-bottom: 1px solid black; min-width: 200px">
                {courtDocketNo}
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div style="display: flex">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp; &#x2610; &nbsp;&nbsp; Client Name:
              </div>
              &nbsp;
              <div style="border-bottom: 1px solid black; min-width: 200px">
                {clientName}
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div style="display: flex">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp; &#x2610; &nbsp;&nbsp; Name of Children
                Insured:
              </div>
              &nbsp;
              <div style="border-bottom: 1px solid black; min-width: 200px">
                {insureChildrenName}
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div style="display: flex">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp; &#x2610; &nbsp;&nbsp; Policy Holder if
                other than client:
              </div>
              &nbsp;
              <div style="border-bottom: 1px solid black; min-width: 200px">
                {policyHolder}
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div style="display: flex">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp; &#x2610; &nbsp;&nbsp; Name of Employer:
              </div>
              &nbsp;
              <div style="border-bottom: 1px solid black; min-width: 200px">
                {employerName}
              </div>
            </div>
          </td>
        </tr>
      </table>

      <br />

      <table width="100%" style="border-collapse: collapse">
        <tr>
          <td width="48%" style="border: 1px solid black">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table width="100%" style="border-collapse: collapse">
        <tr>
          <td width="48%" style="border: 1px solid black; border-top: none">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table width="100%" style="border-collapse: collapse">
        <tr>
          <td width="48%" style="border: 1px solid black; border-top: none">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table width="100%" style="border-collapse: collapse">
        <tr>
          <td width="48%" style="border: 1px solid black; border-top: none">
            <div>
              <table width="98%" style="margin-left: 20px; margin-bottom: 20px">
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Medical Insurance:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Claim Address:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>City, State, Zip:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="100%">
                    <div style="display: flex">
                      <div>Phone No.:</div>
                      &nbsp;
                      <div
                        style="border-bottom: 1px solid black; min-width: 120px"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </td>

          <td
            width="18%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="65%">Date Effective:</td>
              </tr>
            </table>
          </td>

          <td
            width="35%"
            style="
              border: 1px solid black;
              border-left: none;
              border-top: none;
              vertical-align: top;
            "
          >
            <table width="100%" style="margin-left: 20px; margin-bottom: 20px">
              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Policy No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Group No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>

              <tr>
                <td width="100%">
                  <div style="display: flex">
                    <div>Contract No.:</div>
                    &nbsp;
                    <div
                      style="border-bottom: 1px solid black; min-width: 100px"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>

    <v-btn @click="printTest">Print</v-btn>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Questrial&family=Readex+Pro:wght@200;400&display=swap",
        },
      ],
    };
  },

  methods: {
    printTest() {
      if (process.client) {
        var html2pdf = require("html2pdf.js");
        html2pdf(this.$refs.document, {
          margin: [0.3, 1, 0.5, 1],
          filename: "document.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        });
      }
    },
  },
};
</script>